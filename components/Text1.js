import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Text1 = () => {
  return <Text style={styles.text} />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: FontFamily.interRegular,
    color: Color.lightSelected,
    textAlign: "left",
  },
});

export default Text1;
