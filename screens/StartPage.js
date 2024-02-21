import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, View, Text, Modal } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import FrameInstance from "../components/FrameInstance";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const StartPage = () => {
  const [frameContainer1Visible, setFrameContainer1Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(true);
  }, []);

  const closeFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={styles.startPage}
        locations={[0, 0.82, 0.99]}
        colors={["#e9e7d1", "#eeecd6", "rgba(22, 23, 25, 0.8)"]}
        useAngle={true}
        angle={180}
      >
        <View style={styles.statusbar1}>
          <Image
            style={[styles.statusbar1Child, styles.image1Position]}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <LinearGradient
            style={styles.materialSymbolshomeParent}
            locations={[0.36, 1]}
            colors={["rgba(0, 0, 0, 0.5)", "rgba(255, 255, 255, 0)"]}
            useAngle={true}
            angle={180}
          >
            <Image
              style={[
                styles.materialSymbolshomeIcon,
                styles.vectorParentLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/materialsymbolshome.png")}
            />
            <Image
              style={[styles.materialSymbolssearchIcon, styles.materialLayout]}
              resizeMode="cover"
              source={require("../assets/materialsymbolssearch.png")}
            />
            <Pressable
              style={styles.materialLayout}
              onPress={() => navigation.navigate("SharePage")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/materialsymbolsadd.png")}
              />
            </Pressable>
            <Pressable
              style={styles.materialLayout}
              onPress={() => navigation.navigate("MainCalendar")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/fluentchat28regular.png")}
              />
            </Pressable>
            <Pressable
              style={styles.materialLayout}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
            </Pressable>
          </LinearGradient>
        </View>
        <View style={styles.statusBar}>
          <View style={styles.battery}>
            <View style={styles.border} />
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../assets/cap.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <Pressable
          style={[styles.vectorParent, styles.vectorParentLayout]}
          onPress={openFrameContainer1}
        >
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout3]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.allSports, styles.kthLayout]}>{`All Sports
`}</Text>
        </Pressable>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.startPageChild, styles.frameParentPosition]}
          resizeMode="cover"
          source={require("../assets/line-2.png")}
        />
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={[styles.parent, styles.kthLayout]}>
            <Text style={[styles.text, styles.kthLayout]}>147</Text>
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout2]}
              resizeMode="cover"
              source={require("../assets/vector2.png")}
            />
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout2]}
              resizeMode="cover"
              source={require("../assets/vector3.png")}
            />
          </View>
          <View
            style={[
              styles.anyoneCanBorrowMeABadmintWrapper,
              styles.wrapperPosition,
            ]}
          >
            <Text
              style={[styles.anyoneCanBorrow, styles.joinUsWeTypo]}
            >{`Anyone can borrow me a badmint
ton, need it tomorrow. `}</Text>
          </View>
          <Pressable
            style={[styles.image1, styles.image1Position]}
            onPress={() => navigation.navigate("PostDetail")}
          >
            <Image
              style={[styles.icon3, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-1.png")}
            />
          </Pressable>
          <View
            style={[
              styles.joinUsWeNeed2ExtraPlayiWrapper,
              styles.wrapperPosition,
            ]}
          >
            <Text
              style={[styles.joinUsWe, styles.joinUsWeTypo]}
            >{`Join us, we need 2 extra playing
basketball tmr at hall 17 o’clock.
Hope you have experience.

`}</Text>
          </View>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <Image
            style={[styles.image6Icon, styles.iconPosition2]}
            resizeMode="cover"
            source={require("../assets/image-6.png")}
          />
          <View style={styles.lookAtMyOutfitWrapper}>
            <Text style={[styles.lookAtMy, styles.lookAtMyTypo]}>
              Look at my Outfit!!!!
            </Text>
          </View>
          <Image
            style={[styles.image7Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/image-7.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse.png")}
          />
          <Image
            style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse1.png")}
          />
          <Image
            style={[styles.ellipseIcon2, styles.ellipseIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse2.png")}
          />
          <Image
            style={[styles.ellipseIcon3, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse3.png")}
          />
          <Image
            style={[styles.image8Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/image-8.png")}
          />
          <View style={styles.anyGirlWannaBeMySwimPartWrapper}>
            <Text
              style={[styles.anyGirlWanna, styles.lookAtMyTypo]}
            >{`Any girl wanna be my swim 
partner? Swim twice a week`}</Text>
          </View>
          <Image
            style={[styles.vectorIcon5, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.vectorIcon7, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
        <Text style={[styles.kth, styles.kthLayout]}>KTH</Text>
      </LinearGradient>

      <Modal animationType="fade" transparent visible={frameContainer1Visible}>
        <View style={styles.frameContainer1Overlay}>
          <Pressable
            style={styles.frameContainer1Bg}
            onPress={closeFrameContainer1}
          />
          <FrameInstance onClose={closeFrameContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  image1Position: {
    top: 12,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 32,
    overflow: "hidden",
  },
  materialLayout: {
    marginLeft: 50,
    height: 32,
    width: 32,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorIconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kthLayout: {
    height: 35,
    position: "absolute",
  },
  frameParentPosition: {
    top: 117,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout2: {
    bottom: "37.14%",
    width: "25.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperPosition: {
    backgroundColor: Color.colorDarkslateblue_300,
    borderRadius: Border.br_mid,
    left: 72,
    position: "absolute",
  },
  joinUsWeTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    fontSize: FontSize.size_mini,
    top: 7,
    position: "absolute",
  },
  vectorIconLayout1: {
    left: "92.77%",
    right: "2.1%",
    width: "5.13%",
    height: "2.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition2: {
    top: 316,
    position: "absolute",
  },
  lookAtMyTypo: {
    left: 9,
    height: 31,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconPosition1: {
    top: 547,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 48,
    width: 48,
    left: 9,
  },
  iconPosition: {
    top: 766,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "84.62%",
    right: "10.26%",
    width: "5.13%",
    height: "2.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statusbar1Child: {
    left: 13,
    width: 75,
    height: 45,
  },
  materialSymbolshomeIcon: {
    width: 32,
    height: 32,
  },
  materialSymbolssearchIcon: {
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  materialSymbolshomeParent: {
    marginLeft: -215,
    bottom: 0,
    left: "50%",
    borderRadius: Border.br_xs,
    borderColor: Color.colorGray_300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Padding.p_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    height: 78,
    width: 430,
    position: "absolute",
    backgroundColor: "transparent",
  },
  statusbar1: {
    top: 854,
    height: 78,
    left: 0,
    width: 430,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGray_100,
    width: 22,
    opacity: 0.35,
    top: 0,
    height: 11,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorGray_100,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 14,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontFamily: FontFamily.sFProText,
    color: Color.colorGray_100,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    left: 21,
    height: 21,
    width: 54,
    top: 7,
    position: "absolute",
  },
  statusBar: {
    top: 11,
    left: 33,
    width: 363,
    height: 44,
    position: "absolute",
  },
  frameContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "43.75%",
    width: "7.06%",
    top: "28.13%",
    right: "10.87%",
    bottom: "28.13%",
    left: "82.06%",
  },
  allSports: {
    top: -1,
    left: -16,
    fontSize: FontSize.size_xl,
    width: 128,
    color: Color.colorRoyalblue,
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  vectorParent: {
    top: 88,
    left: 309,
    width: 126,
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.87%",
    width: "2.56%",
    top: "8.91%",
    right: "77.21%",
    bottom: "89.23%",
    left: "20.23%",
  },
  startPageChild: {
    height: 2,
    width: 430,
    top: 117,
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.colorCornflowerblue,
    width: 36,
    left: 10,
    fontFamily: FontFamily.poppinsSemiBold,
    height: 35,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    top: 0,
  },
  vectorIcon2: {
    height: "62.86%",
    top: "0%",
    right: "20.93%",
    left: "53.49%",
  },
  vectorIcon3: {
    height: "57.14%",
    top: "5.71%",
    right: "-12.79%",
    left: "87.21%",
  },
  parent: {
    top: 715,
    left: 323,
    width: 86,
  },
  anyoneCanBorrow: {
    height: 51,
    width: 281,
    left: 10,
  },
  anyoneCanBorrowMeABadmintWrapper: {
    top: 461,
    height: 52,
    width: 281,
  },
  icon3: {
    borderRadius: Border.br_mid,
  },
  image1: {
    height: 191,
    width: 281,
    left: 72,
  },
  joinUsWe: {
    left: 11,
    width: 255,
    height: 67,
  },
  joinUsWeNeed2ExtraPlayiWrapper: {
    top: 215,
    width: 277,
    height: 74,
  },
  vectorIcon4: {
    bottom: "60.79%",
    top: "36.5%",
  },
  image6Icon: {
    height: 133,
    width: 281,
    borderRadius: Border.br_mid,
    left: 72,
  },
  lookAtMy: {
    width: 302,
    top: 7,
    left: 9,
  },
  lookAtMyOutfitWrapper: {
    top: 712,
    height: 31,
    width: 264,
    left: 71,
    backgroundColor: Color.colorDarkslateblue_300,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  image7Icon: {
    width: 269,
    height: 153,
    borderRadius: Border.br_mid,
    left: 72,
  },
  ellipseIcon: {
    top: 316,
    position: "absolute",
  },
  ellipseIcon1: {
    top: 547,
    position: "absolute",
  },
  ellipseIcon2: {
    top: 12,
    position: "absolute",
  },
  ellipseIcon3: {
    height: 48,
    width: 48,
    left: 9,
  },
  image8Icon: {
    width: 263,
    height: 161,
    borderRadius: Border.br_mid,
    left: 72,
  },
  anyGirlWanna: {
    top: 8,
    width: 252,
  },
  anyGirlWannaBeMySwimPartWrapper: {
    top: 944,
    height: 49,
    width: 264,
    left: 71,
    backgroundColor: Color.colorDarkslateblue_300,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  vectorIcon5: {
    bottom: "60.79%",
    top: "36.5%",
  },
  vectorIcon6: {
    top: "66.89%",
    bottom: "30.39%",
  },
  vectorIcon7: {
    top: "67.03%",
    bottom: "30.26%",
  },
  frameParent: {
    width: 429,
    height: 737,
  },
  kth: {
    top: 69,
    left: 20,
    fontSize: 28,
    width: 63,
    color: Color.colorRoyalblue,
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  startPage: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    width: "100%",
    overflow: "hidden",
  },
});

export default StartPage;
