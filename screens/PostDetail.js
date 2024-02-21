import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PostDetail = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.postdetail}
      locations={[0, 0.99]}
      colors={["#56688a", "#161719"]}
      useAngle={true}
      angle={180}
    >
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <View style={styles.joinUsWeNeedMoreProplePWrapper}>
        <Text style={styles.joinUsWe}>{`
Join us, we need more prople playing 
basketball at hall 17 o’clock every Thursday.
Hope you have experience.






`}</Text>
      </View>
      <View style={[styles.eventChallengeWrapper, styles.wrapperLayout]}>
        <Text
          style={[styles.eventChallenge, styles.hallTypo]}
        >{`Event & Challenge`}</Text>
      </View>
      <View style={[styles.hallWrapper, styles.wrapperLayout]}>
        <Text style={[styles.hall, styles.hallTypo]}>Hall</Text>
      </View>
      <View style={styles.postdetailChild} />
      <Pressable
        style={styles.chevronbackwardWrapper}
        onPress={() => navigation.navigate("StartPage")}
      >
        <Image
          style={styles.chevronbackwardIcon}
          resizeMode="cover"
          source={require("../assets/chevronbackward1.png")}
        />
      </Pressable>
      <Image
        style={styles.postdetailItem}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse4.png")}
      />
      <Text style={[styles.cecilia, styles.ceciliaTypo]}>Cecilia</Text>
      <Text
        style={[styles.categories, styles.signUpTypo]}
      >{`Categories : `}</Text>
      <Text style={[styles.location, styles.signUpTypo]}>Location :</Text>
      <Text style={[styles.members, styles.membersPosition]}>Members :</Text>
      <Pressable
        style={[styles.signUpWrapper, styles.signUpWrapperLayout]}
        onPress={() => navigation.navigate("StartPage")}
      >
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
      </Pressable>
      <Pressable
        style={[styles.addInCalendarParent, styles.addLayout]}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Text style={[styles.addInCalendar, styles.addLayout]}>
          Add in Calendar
        </Text>
        <Image
          style={styles.chevronbackwardIcon1}
          resizeMode="cover"
          source={require("../assets/chevronbackward2.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon1, styles.membersPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse5.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 45,
    width: 164,
    left: 141,
    backgroundColor: Color.colorMidnightblue_100,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  hallTypo: {
    height: 23,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ceciliaTypo: {
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  signUpTypo: {
    width: 100,
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  membersPosition: {
    top: 692,
    position: "absolute",
  },
  signUpWrapperLayout: {
    backgroundColor: Color.colorCornflowerblue,
    top: 777,
    borderRadius: Border.br_3xs,
    height: 44,
  },
  addLayout: {
    width: 178,
    position: "absolute",
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderColor: Color.lightSelected,
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    height: 11,
    position: "absolute",
  },
  capIcon: {
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    top: 4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.lightSelected,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    left: 324,
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
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.lightSelected,
    left: 0,
    width: 54,
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
    width: 363,
    height: 44,
    left: 33,
    position: "absolute",
  },
  image5Icon: {
    top: 190,
    height: 244,
    width: 357,
    borderRadius: Border.br_mid,
    left: 33,
    position: "absolute",
  },
  joinUsWe: {
    top: -7,
    left: 11,
    width: 346,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    fontSize: FontSize.size_base,
    height: 90,
    position: "absolute",
  },
  joinUsWeNeedMoreProplePWrapper: {
    top: 458,
    height: 90,
    backgroundColor: Color.colorMidnightblue_100,
    width: 357,
    borderRadius: Border.br_mid,
    left: 33,
    position: "absolute",
  },
  eventChallenge: {
    top: 14,
    left: 9,
    width: 146,
  },
  eventChallengeWrapper: {
    top: 562,
  },
  hall: {
    top: 16,
    left: 66,
    width: 41,
  },
  hallWrapper: {
    top: 621,
  },
  postdetailChild: {
    left: 17,
    width: 62,
    height: 37,
    top: 64,
    position: "absolute",
  },
  chevronbackwardIcon: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  chevronbackwardWrapper: {
    left: 29,
    backgroundColor: Color.colorMidnightblue_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: Color.colorGray_200,
    width: 73,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    height: 37,
    top: 64,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  postdetailItem: {
    top: 110,
    left: 1,
    width: 430,
    height: 2,
    position: "absolute",
  },
  ellipseIcon: {
    top: 120,
    width: 56,
    height: 56,
    left: 27,
    position: "absolute",
  },
  cecilia: {
    top: 136,
    left: 64,
    width: 128,
    color: Color.colorRoyalblue,
    position: "absolute",
  },
  categories: {
    top: 572,
    left: 31,
    color: Color.colorRoyalblue,
    fontSize: FontSize.size_base,
    width: 100,
    position: "absolute",
  },
  location: {
    top: 632,
    left: 22,
    color: Color.colorRoyalblue,
    fontSize: FontSize.size_base,
    width: 100,
    position: "absolute",
  },
  members: {
    width: 100,
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.colorRoyalblue,
    left: 27,
    fontSize: FontSize.size_base,
  },
  signUp: {
    left: 2,
    fontSize: FontSize.size_xl,
    width: 100,
    color: Color.lightSelected,
    top: 4,
    position: "absolute",
  },
  signUpWrapper: {
    left: 293,
    width: 102,
    position: "absolute",
  },
  addInCalendar: {
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.lightSelected,
    left: 0,
    width: 178,
    top: 7,
  },
  chevronbackwardIcon1: {
    height: "75.68%",
    width: "30.79%",
    top: "12.27%",
    right: "-20.34%",
    bottom: "12.05%",
    left: "89.55%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addInCalendarParent: {
    left: 85,
    backgroundColor: Color.colorCornflowerblue,
    top: 777,
    borderRadius: Border.br_3xs,
    height: 44,
  },
  ellipseIcon1: {
    left: 328,
    width: 48,
    height: 48,
  },
  postdetail: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default PostDetail;
