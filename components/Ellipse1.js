import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Ellipse1 = () => {
  return (
    <ImageBackground
      style={styles.ellipseIcon}
      resizeMode="cover"
      source={require("../assets/ellipse6.png")}
    />
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    width: 48,
    height: 48,
  },
});

export default Ellipse1;
