import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.noteSharebrowsePostUniveParent}>
      <Text style={styles.noteSharebrowsePost}>{`note:
share,browse post (university and sport filter; find partner, 
profile(calendar, reminder and event arrangement)

`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteSharebrowsePost: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 32,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightSelected,
    textAlign: "center",
    width: 549,
    height: 287,
  },
  noteSharebrowsePostUniveParent: {
    flex: 1,
    width: "100%",
    height: 278,
  },
});

export default Frame;
