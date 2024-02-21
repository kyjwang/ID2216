import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.profile, styles.iconLayout]}
      locations={[0, 0.49, 0.99]}
      colors={["#d1ceb6", "#8d928d", "#161719"]}
      useAngle={true}
      angle={180}
    >
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
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
          source={require("../assets/wifi2.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection2.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.statusbar1, styles.statusbar1Layout]}>
        <Image
          style={styles.statusbar1Child}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <LinearGradient
          style={[
            styles.materialSymbolshomeParent,
            styles.importCalendarWrapperPosition,
          ]}
          locations={[0.36, 1]}
          colors={["rgba(0, 0, 0, 0.5)", "rgba(255, 255, 255, 0)"]}
          useAngle={true}
          angle={180}
        >
          <Pressable
            style={styles.materialLayout}
            onPress={() => navigation.navigate("StartPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/materialsymbolshome3.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.materialSymbolssearch, styles.materialLayout]}
            onPress={() => navigation.navigate("SearchPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/materialsymbolssearch.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.materialSymbolssearch, styles.materialLayout]}
            onPress={() => navigation.navigate("SharePage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/materialsymbolsadd.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.materialSymbolssearch, styles.materialLayout]}
            onPress={() => navigation.navigate("MainCalendar")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/fluentchat28regular.png")}
            />
          </Pressable>
          <Image
            style={[styles.materialSymbolssearch, styles.materialLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </LinearGradient>
      </View>
      <View
        style={[styles.materialSymbolssettingsRoun, styles.materialLayout]}
      />
      <Image
        style={[styles.profileChild, styles.statusBarPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Text style={[styles.peterGustafsson, styles.logOutFlexBox]}>
        Peter Gustafsson
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.stcokholmSweden, styles.logOutFlexBox]}>
        Stcokholm, Sweden
      </Text>
      <View
        style={[styles.studyingProductDesignInKthParent, styles.parentLayout]}
      >
        <Text
          style={styles.studyingProductDesign}
        >{`Studying product design in KTH.
Love football, gym and chocolate bolls. 
Contact me if you need footbal player
in your team....`}</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <View style={[styles.vectorParent, styles.vectorParentPosition]}>
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Text style={[styles.football, styles.kthLayout]}>Football</Text>
      </View>
      <Text style={[styles.kth, styles.kthLayout]}>{`KTH `}</Text>
      <View style={styles.vectorGroup}>
        <Image
          style={[styles.vectorIcon7, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Text style={[styles.bachelorStudent, styles.kthLayout]}>
          Bachelor Student
        </Text>
      </View>
      <View style={[styles.vectorContainer, styles.groupViewPosition]}>
        <Image
          style={[styles.vectorIcon8, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Text style={[styles.vegetarian, styles.kthLayout]}> Vegetarian</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <Image
          style={[styles.vectorIcon9, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Text style={[styles.outgoing, styles.kthLayout]}> Outgoing</Text>
      </View>
      <View style={[styles.vectorParent1, styles.vectorParentPosition]}>
        <Image
          style={styles.vectorIcon10}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Text style={[styles.gym, styles.kthLayout]}>Gym</Text>
      </View>
      <Image
        style={[styles.vectorIcon11, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector14.png")}
      />
      <View style={[styles.groupParent, styles.kthLayout]}>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.myWorkoutPlan, styles.myWorkoutPlanTypo]}>
            My Workout plan
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View
            style={[
              styles.importCalendarWrapper,
              styles.importCalendarWrapperPosition,
            ]}
          >
            <Text style={styles.myWorkoutPlanTypo}>Import Calendar</Text>
          </View>
        </View>
      </View>
      <View style={[styles.logOutParent, styles.parentLayout]}>
        <Text style={[styles.logOut, styles.logOutFlexBox]}>Log out</Text>
        <Image
          style={[styles.vectorIcon12, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector15.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  statusBarPosition: {
    left: 33,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  statusbar1Layout: {
    height: 78,
    width: 430,
  },
  importCalendarWrapperPosition: {
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  materialLayout: {
    height: 32,
    width: 32,
  },
  logOutFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parentLayout: {
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  vectorIconLayout: {
    top: "30.58%",
    width: "5.81%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorParentPosition: {
    bottom: "46.67%",
    top: "49.57%",
    height: "3.76%",
    position: "absolute",
  },
  vectorIconPosition: {
    left: "0%",
    bottom: "31.43%",
    top: "11.43%",
    height: "57.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kthLayout: {
    height: 35,
    position: "absolute",
  },
  groupViewPosition: {
    bottom: "41.52%",
    top: "54.72%",
    height: "3.76%",
    position: "absolute",
  },
  groupLayout: {
    width: 166,
    height: 35,
    top: 0,
    position: "absolute",
  },
  myWorkoutPlanTypo: {
    color: Color.lightSelected,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorBlack,
    width: 22,
    opacity: 0.35,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    height: 11,
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
    backgroundColor: Color.colorBlack,
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
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    top: "50%",
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    width: 54,
    position: "absolute",
  },
  statusBar: {
    width: 363,
    height: 44,
    top: 11,
  },
  statusbar1Child: {
    left: 341,
    width: 75,
    height: 45,
    top: 11,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  materialSymbolssearch: {
    marginLeft: 50,
  },
  materialSymbolshomeParent: {
    marginLeft: -215,
    bottom: 0,
    borderRadius: Border.br_xs,
    borderColor: Color.colorGray_300,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Padding.p_3xs,
    height: 78,
    width: 430,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "transparent",
  },
  statusbar1: {
    top: 854,
    left: 0,
    position: "absolute",
  },
  materialSymbolssettingsRoun: {
    top: 80,
    left: 347,
    position: "absolute",
    overflow: "hidden",
  },
  profileChild: {
    top: 69,
    width: 150,
    height: 150,
  },
  peterGustafsson: {
    marginLeft: -4,
    top: 189,
    color: Color.colorDarkslateblue_100,
    width: 168,
    height: 38,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    left: "50%",
  },
  vectorIcon: {
    height: "2.41%",
    width: "4.19%",
    top: "23.71%",
    right: "45.81%",
    bottom: "73.87%",
    left: "50%",
  },
  stcokholmSweden: {
    top: 227,
    left: 240,
    fontSize: 13,
    lineHeight: 11,
    fontWeight: "500",
    fontFamily: FontFamily.default,
    color: Color.colorDimgray_100,
  },
  studyingProductDesign: {
    top: 10,
    left: 11,
    fontFamily: FontFamily.poppinsRegular,
    width: 321,
    height: 103,
    lineHeight: 14,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  vectorIcon1: {
    height: "17.84%",
    width: "5.31%",
    top: "69.61%",
    right: "3.15%",
    bottom: "12.55%",
    left: "91.55%",
  },
  studyingProductDesignInKthParent: {
    top: 337,
    left: 39,
    backgroundColor: Color.colorDarkslateblue_300,
    width: 343,
    height: 102,
  },
  vectorIcon2: {
    height: "1.95%",
    width: "4.23%",
    top: "31.22%",
    right: "73.21%",
    bottom: "66.82%",
    left: "22.56%",
  },
  vectorIcon3: {
    height: "2.68%",
    top: "30.69%",
    right: "36.05%",
    bottom: "66.63%",
    left: "58.14%",
    width: "5.81%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    height: "2.85%",
    right: "24.42%",
    bottom: "66.57%",
    left: "69.77%",
  },
  vectorIcon5: {
    height: "2.62%",
    right: "12.79%",
    bottom: "66.8%",
    left: "81.4%",
  },
  vectorIcon6: {
    width: "15.11%",
    right: "84.89%",
  },
  football: {
    width: 128,
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
    left: 5,
    fontSize: FontSize.size_xl,
    top: 0,
  },
  vectorParent: {
    width: "30.93%",
    right: "59.3%",
    left: "9.77%",
  },
  kth: {
    top: 283,
    left: 2,
    fontSize: FontSize.default_size,
    width: 128,
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
  },
  vectorIcon7: {
    width: "8.97%",
    right: "91.03%",
  },
  bachelorStudent: {
    width: 219,
    fontFamily: FontFamily.poppinsSemiBold,
    height: 35,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
    top: 0,
    left: 5,
  },
  vectorGroup: {
    width: "52.09%",
    top: "59.87%",
    right: "38.14%",
    bottom: "36.37%",
    left: "9.77%",
    height: "3.76%",
    position: "absolute",
  },
  vectorIcon8: {
    width: "14%",
    right: "86%",
  },
  vegetarian: {
    left: 10,
    width: 140,
    fontFamily: FontFamily.poppinsSemiBold,
    height: 35,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
    top: 0,
  },
  vectorContainer: {
    width: "34.88%",
    right: "23.26%",
    left: "41.86%",
  },
  vectorIcon9: {
    width: "14.67%",
    right: "85.33%",
  },
  outgoing: {
    left: 9,
    width: 128,
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: 0,
  },
  groupView: {
    width: "31.86%",
    right: "58.37%",
    left: "9.77%",
  },
  vectorIcon10: {
    width: "15.7%",
    right: "75.7%",
    left: "8.59%",
    bottom: "31.43%",
    top: "11.43%",
    height: "57.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gym: {
    width: 128,
    height: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: 0,
    left: 0,
  },
  vectorParent1: {
    width: "29.77%",
    right: "30.93%",
    left: "39.3%",
  },
  vectorIcon11: {
    height: "2.15%",
    width: "4.65%",
    top: "60.3%",
    right: "33.72%",
    bottom: "37.55%",
    left: "61.63%",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorDarkslateblue_200,
    left: 0,
  },
  myWorkoutPlan: {
    marginTop: -7.5,
    marginLeft: -66.75,
    width: 131,
    height: 12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
  },
  importCalendarWrapper: {
    marginTop: -16.5,
    marginLeft: -70.85,
    padding: Padding.p_3xs,
    top: "50%",
  },
  rectangleGroup: {
    left: 174,
  },
  groupParent: {
    top: 616,
    left: 43,
    width: 339,
  },
  logOut: {
    top: 14,
    left: 38,
    lineHeight: 18,
    color: "#504f52",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
  },
  vectorIcon12: {
    height: "58.89%",
    width: "21.54%",
    top: "20.67%",
    right: "72.05%",
    bottom: "20.44%",
    left: "6.41%",
  },
  logOutParent: {
    top: 788,
    left: 292,
    backgroundColor: Color.colorMidnightblue_200,
    width: 117,
    height: 45,
  },
  profile: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Profile;
