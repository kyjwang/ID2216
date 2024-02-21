import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Ellipse2 = () => {
  return (
    <ImageBackground
      style={styles.ellipseIcon}
      resizeMode="cover"
      source={require("../assets/ellipse7.png")}
    />
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    width: 48,
    height: 48,
  },
});

export default Ellipse2;
