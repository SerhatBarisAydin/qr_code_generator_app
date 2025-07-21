import { StyleSheet, Text, View, Image } from "react-native";
import React, { useRef, useState } from "react";
import Assets from "../config/assets";
import QRCode from "react-native-qrcode-svg";
import LottieView from "lottie-react-native";
import coronaVirus from "../../assets/animations/corona-virus.json";
import ButtonWithImageComponent from "../components/ButtonWithImageComponent";
import QRCodeStyled from "react-native-qrcode-styled";

import { handleSaveQRCode } from "../utils/handleSaveQRCode";
import Toast from "react-native-toast-message";
import DropDownMenuComponent from "./DropDownMenuComponent";
import ButtonComponent from "./ButtonComponent";

const GeneratedQRComponent = ({ qrValue }) => {
  const qrCodeRef = useRef();
  const [selectedColor, setSelectedColor] = useState("black");

  const showToastSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Saved successfully",
      text2: "Your code successfully saved to gallery",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.qrCodeContainer}>
        {qrValue === "" ? (
          <LottieView
            style={{ width: 300, height: 300 }}
            autoPlay
            loop
            source={coronaVirus}
          />
        ) : (
          <View ref={qrCodeRef} collapsable={false}>
            <QRCodeStyled
              style={[
                {
                  backgroundColor: "#ffffffff",
                  borderRadius: 12,
                  maxWidth: 280,
                  maxHeight: 280,
                  minWidth: 280,
                  minHeight: 280,
                },
                styles.qrStyle,
              ]}
              padding={15}
              data={qrValue}
              color={selectedColor}
            />
          </View>
        )}
      </View>

      <View style={styles.qrCodeOptions}>
        <DropDownMenuComponent
          value={selectedColor}
          onChangeValue={setSelectedColor}
          width={"90%"}
        />

        <ButtonComponent
          width={"90%"}
          onPress={() => handleSaveQRCode(qrCodeRef)}
          title="Download"
          backgroundColor={Assets.colors.success.FIRST}
          borderWidth={0}
          height={45}
        />
      </View>
    </View>
  );
};

export default GeneratedQRComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: "90%",
    height: "500",
    backgroundColor: Assets.colors.background.FIRST,
    padding: "6%",
    borderRadius: 14,
    marginTop: 20,
  },

  qrCodeContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Assets.colors.background.SECOND,
    borderRadius: 8,
    /*     borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0, */
    borderRadius: 8,
    flex: 5,
  },

  qrCodeOptions: {
    backgroundColor: "white",
    flex: 2,
    width: "100%",
    height: "50",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
    /* borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8, */
    borderRadius: 8,
    flexDirection: "column",
  },
  qrStyle: {
    shadowColor: "#34495E",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 16,
    borderRadius: 20,
    width: 200,
    height: 200,
  },
});
