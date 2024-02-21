import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponentSet = () => {
  return (
    <View style={styles.property1defaultParent}>
      <LinearGradient
        style={[styles.property1default, styles.property1defaultLayout]}
        locations={[0, 1]}
        colors={["#797d84", "#161719"]}
        useAngle={true}
        angle={180}
      >
        <LinearGradient
          style={[styles.scrollbar, styles.scrollbarLayout]}
          locations={[0, 1]}
          colors={["#a5a5a5", "#17181a"]}
          useAngle={true}
          angle={180}
        >
          <View style={styles.thumb}>
            <Text style={[styles.vspacer, styles.vspacerTypo]}>{`



`}</Text>
          </View>
        </LinearGradient>
        <View style={styles.property1defaultInner}>
          <View style={styles.frameWrapper}>
            <View style={styles.basketBadmintonPingisSoccerParent}>
              <Text
                style={[styles.basketBadmintonPingis, styles.basketTypo]}
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
      <LinearGradient
        style={[styles.property1variant3, styles.property1defaultLayout]}
        locations={[0, 1]}
        colors={["#747474", "#161719"]}
        useAngle={true}
        angle={180}
      >
        <LinearGradient
          style={[styles.scrollbar1, styles.scrollbarLayout]}
          locations={[0, 1]}
          colors={["#838383", "#161719"]}
          useAngle={true}
          angle={180}
        >
          <View style={[styles.thumb1, styles.thumb1Layout]}>
            <Text style={[styles.vspacer1, styles.thumb1Layout]}>{`



`}</Text>
          </View>
        </LinearGradient>
        <View style={styles.property1defaultInner}>
          <View style={styles.frameWrapper}>
            <View style={styles.basketBadmintonPingisSoccerParent}>
              <Text
                style={[styles.basketBadmintonPingis1, styles.basketTypo]}
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
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    backgroundColor: "transparent",
    height: 164,
    width: 140,
    left: 20,
    position: "absolute",
  },
  scrollbarLayout: {
    width: 38,
    backgroundColor: "transparent",
    height: 164,
    position: "absolute",
  },
  vspacerTypo: {
    textAlign: "left",
    color: Color.colorSilver_200,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_9xs,
    width: 39,
  },
  basketTypo: {
    height: 328,
    width: 92,
    color: Color.lightSelected,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: 35,
    width: 111,
    position: "absolute",
    overflow: "hidden",
  },
  thumb1Layout: {
    height: 32,
    position: "absolute",
  },
  vspacer: {
    left: 0,
    top: 2,
    position: "absolute",
  },
  thumb: {
    backgroundColor: "#ccd0d2",
    height: 27,
    width: 39,
    borderRadius: Border.br_9xs,
    left: -1,
    top: 0,
    position: "absolute",
  },
  scrollbar: {
    left: 103,
    top: 0,
  },
  basketBadmintonPingis: {
    left: 11,
    top: 1,
  },
  frameChild: {
    top: 32,
    left: 2,
  },
  frameItem: {
    left: 0,
    top: 2,
  },
  basketBadmintonPingisSoccerParent: {
    width: 113,
    height: 165,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapper: {
    width: 112,
    height: 320,
  },
  property1defaultInner: {
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  property1default: {
    top: 89,
  },
  vspacer1: {
    textAlign: "left",
    color: Color.colorSilver_200,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_9xs,
    width: 39,
    height: 32,
    left: -1,
    top: 0,
  },
  thumb1: {
    top: 132,
    backgroundColor: "#c6c6c6",
    left: 0,
    borderRadius: Border.br_9xs,
    height: 32,
    width: 38,
  },
  scrollbar1: {
    left: 102,
    top: 1,
  },
  basketBadmintonPingis1: {
    top: -164,
    left: 8,
  },
  property1variant3: {
    top: 283,
  },
  property1defaultParent: {
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: 180,
    height: 560,
    overflow: "hidden",
  },
});

export default FrameComponentSet;
