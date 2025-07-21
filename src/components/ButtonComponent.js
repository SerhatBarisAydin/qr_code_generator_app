import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
const ButtonComponent = ({
  backgroundColor = "#2196F3",
  height = 40,
  width = 120,
  title = "Button",
  onPress = () => {},
  fontFamily = "Arial",
  fontSize = 16,
  fontWeight = "bold",
  color = "#fff",
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderColor = "#2196F3",
  borderWidth = 1,
  borderRadius = 8,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          {
            backgroundColor: backgroundColor,
            height: height,
            width: width,
            borderBottomLeftRadius: borderBottomLeftRadius,
            borderBottomRightRadius: borderBottomRightRadius,
            borderTopLeftRadius: borderTopLeftRadius,
            borderTopRightRadius: borderTopRightRadius,
            borderRadius:borderRadius,
            borderColor: borderColor,
            borderWidth:borderWidth
          },
          styles.button,
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            {
              fontWeight: fontWeight,
              fontFamily: fontFamily,
              fontSize: fontSize,
              color: color,
            },
            styles.buttonText,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    
  },
  buttonText: {},
});
