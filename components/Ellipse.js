import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Ellipse = () => {
  return <View style={styles.ellipseView} />;
};

const styles = StyleSheet.create({
  ellipseView: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue_100,
    borderWidth: 1,
    width: 155,
    height: 155,
  },
});

export default Ellipse;
