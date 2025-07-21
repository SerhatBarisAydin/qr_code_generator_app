import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import { useState } from "react";
import Assets from "../config/assets";

const InputCardComponent = ({ setQrValue }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerText}>Generate QR Code</Text>
      </View>

      <View style={styles.cardContent}>
        <InputComponent
          placeholder={"Type in any format :) ..."}
          onactiveColor={"red"}
          onChangeText={setInputValue}
          value={inputValue}
          borderColor="blue"
          borderWidth={0.5}
        />
        <ButtonComponent
          title="Generate"
          width={"90%"}
          borderRadius={5}
          onPress={() => setQrValue(inputValue)} //returns the value that we write into input component
        />
      </View>
    </View>
  );
};

export default InputCardComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: "90%",
    height: "auto",
    backgroundColor: Assets.colors.background.FIRST ,
    padding:"6%",
    paddingTop:0,
    borderRadius: 14,
  },
  cardHeader: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40",
  },
  headerText: {
    color: Assets.colors.text.FIRST,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "120",
    backgroundColor: Assets.colors.background.SECOND,
    borderRadius: 8,
    
  },
});
