import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const FrameInstance = ({ onClose }) => {
  return (
    <LinearGradient
      style={[styles.scrollbarParent, styles.scrollbarBg]}
      locations={[0, 1]}
      colors={["#818691", "#161719"]}
      useAngle={true}
      angle={180}
    >
      <LinearGradient
        style={[styles.scrollbar, styles.thumbPosition]}
        locations={[0, 1]}
        colors={["#828994", "#17181a"]}
        useAngle={true}
        angle={180}
      >
        <View style={[styles.thumb, styles.thumbPosition]}>
          <Text style={[styles.vspacer, styles.vspacerFlexBox]}>{`



`}</Text>
        </View>
      </LinearGradient>
      <View style={[styles.frameWrapper, styles.thumbPosition]}>
        <View style={styles.frameContainer}>
          <View
            style={[
              styles.basketBadmintonPingisSoccParent,
              styles.thumbPosition,
            ]}
          >
            <Text
              style={[styles.basketBadminton, styles.vspacerFlexBox]}
            >{`Basket 
Badminton 
Pingis
Soccer
Baseboll
Dance
Rugby
skii
Gym
Tenis`}</Text>
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollbarBg: {
    backgroundColor: "transparent",
    height: 164,
  },
  thumbPosition: {
    top: 0,
    position: "absolute",
  },
  vspacerFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    overflow: "hidden",
    height: 35,
    width: 111,
    position: "absolute",
  },
  vspacer: {
    fontSize: FontSize.size_9xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorSilver_200,
    left: 0,
    top: 2,
    width: 39,
  },
  thumb: {
    left: -1,
    borderRadius: Border.br_9xs,
    backgroundColor: "#cacbcc",
    height: 27,
    width: 39,
  },
  scrollbar: {
    left: 103,
    width: 38,
    backgroundColor: "transparent",
    height: 164,
  },
  basketBadminton: {
    top: 1,
    left: 11,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightSelected,
    width: 92,
    height: 328,
  },
  frameChild: {
    top: 32,
    left: 2,
  },
  frameItem: {
    left: 0,
    top: 2,
  },
  basketBadmintonPingisSoccParent: {
    width: 113,
    height: 165,
    left: 0,
  },
  frameContainer: {
    width: 112,
    height: 320,
  },
  frameWrapper: {
    alignItems: "center",
    justifyContent: "center",
    left: 0,
  },
  scrollbarParent: {
    width: 140,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default FrameInstance;
