import { Alert, Platform } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import Toast from 'react-native-toast-message';



/**
 * Oluşturulan QR kodunu cihazın galerisine kaydeder veya paylaşım seçeneklerini sunar.
 * Bu fonksiyonu kullanabilmek için aşağıdaki kütüphanelerin projenizde kurulu olması gerekir:
 * - react-native-view-shot
 * - expo-sharing
 * - expo-media-library
 *
 * @param {React.RefObject<View>} qrCodeRef - QR kodunu içeren View bileşeninin referansı.
 * Bu ref'in atandığı View'da `collapsable={false}` prop'u olmalıdır.
 */
export const handleSaveQRCode = async (qrCodeRef) => {
  
  const savedSuccessfully = () => {
    Toast.show({

      type: "success",
      text1: "Görsel kaydildi!",
      text2:"Görsel başarıyla galeriye kaydedildi.."


    })
  }

  const invalidValue = () => {
    Toast.show({
      type:"error",
      text1: "İndirme başarısız",
      text2: "İndirme işlemi başarısız oldu"
    })
  }
  
  
  
  
  try {
    // Android için medya kütüphanesi izinlerini iste
    if (Platform.OS === 'android') {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('İzin Reddedildi', 'QR kodu kaydetmek için medya kütüphanesi izni gerekiyor.');
        return; // İzin verilmediyse fonksiyondan çık
      }
    }

    // QR kod görüntüsünü yakala (PNG formatında ve en yüksek kalitede)
    // `captureRef` fonksiyonu, belirtilen View bileşeninin anlık görüntüsünü alır.
    const uri = await captureRef(qrCodeRef.current, {
      format: 'png',
      quality: 1, // Görüntü kalitesi (0.0 ile 1.0 arası)
    });

    // Görüntü başarıyla yakalandıysa işleme devam et
    if (uri) {
      if (Platform.OS === 'ios') {
        // iOS'ta, yerel paylaşım penceresini açar.
        // Kullanıcı buradan görüntüyü kaydetme, mesajlaşma, e-posta gönderme vb. seçenekleri bulabilir.
        await Sharing.shareAsync(uri);
        Alert.alert('Paylaşma Seçenekleri', 'QR kodunuzu kaydetmek veya paylaşmak için açılan menüyü kullanın.');
      } else {
        // Android'de, doğrudan cihazın medya kütüphanesine kaydet
        const asset = await MediaLibrary.createAssetAsync(uri); // Görüntüyü bir medya öğesi olarak oluştur
        
        // İsteğe bağlı: QR kodu belirli bir albüme kaydet
        // Eğer 'Download' albümü yoksa oluşturur, varsa içine ekler.
        const album = await MediaLibrary.getAlbumAsync('Download'); 
        if (album === null) {
          await MediaLibrary.createAlbumAsync('Download', asset, false);
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        }
        savedSuccessfully();
      }
    } else {
      // URI boşsa, yakalama işleminde bir sorun olduğunu belirt
      Alert.alert('Hata', 'QR kodu görüntüsü yakalanamadı.');
    }
  } catch (error) {
    // Herhangi bir hata oluşursa konsola yaz ve kullanıcıya bilgi ver
    invalidValue();
  }
};
