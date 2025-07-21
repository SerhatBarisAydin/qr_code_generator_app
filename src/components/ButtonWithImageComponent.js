import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";

const ButtonWithImageComponent = ({
  backgroundColor,
  pressedBackgroundColor,
  height = 50,
  width = 78,
  onPress = () => {},
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderColor,
  borderWidth = 0,
  borderRadius = 0,
  borderBottomWidth,
  borderTopWidth,
  borderLeftWidth,
  borderRightWidth,
  imageSource,
}) => {
  const [isActive, setIsActive] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    setIsActive(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    setIsActive(false);
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const bgColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [backgroundColor || "#fff", pressedBackgroundColor || "green"],
  });

  return (
    <Animated.View
      style={{ borderRadius: borderRadius, backgroundColor: bgColor }}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={[
          {
            height: height,
            width: width,
            borderBottomLeftRadius: borderBottomLeftRadius,
            borderBottomRightRadius: borderBottomRightRadius,
            borderTopLeftRadius: borderTopLeftRadius,
            borderTopRightRadius: borderTopRightRadius,
            borderRadius: borderRadius,
            borderColor: isActive ? "green" : borderColor,
            borderWidth: borderWidth,
            borderLeftWidth: borderLeftWidth,
            borderRightWidth: borderRightWidth,
            borderTopWidth: borderTopWidth,
            borderBottomWidth: borderBottomWidth,
            alignItems: "center",
            justifyContent: "center",
          },
          styles.button,
        ]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Image style={{ height: 30, width: 30 }} source={imageSource} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ButtonWithImageComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
