import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Assets from '../config/assets'
const ScanCodeScreen = () => {
  return (


    <SafeAreaView style={styles.container}>
          
          <View style={styles.cameraContainer}>
            

          </View>
    </SafeAreaView>


  )
}

export default ScanCodeScreen

const styles = StyleSheet.create({

  container:{
    borderWidth:2,
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center",
    
  },
//BURADAKİ DEĞERLERİ KAMERA BOYUTUNA GÖRE DEĞİŞTİR
  cameraContainer:{
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    flex:1,
    backgroundColor: Assets.colors.background.FIRST,
    borderWidth:2,
    borderColor:"red"
  }
})