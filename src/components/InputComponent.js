import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
const InputComponent = ({
  height = "auto",
  width = "90%",
  borderColor = "gray",
  borderRadius = 5,
  borderWidth = 0.4,
  placeholder = "placeholder",
  backgroundColor,
  value,
  onChangeText
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[
          {
            height: height,
            width: width,
            borderRadius: borderRadius,
            borderWidth: borderWidth,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
          },
          styles.textInput,
        ]}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },
  textInput: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
