import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MainCalendar = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.maincalendar}
      locations={[0, 0.49, 0.99]}
      colors={["#d1ceb6", "#8d928d", "#161719"]}
      useAngle={true}
      angle={180}
    >
      <View style={styles.statusBar}>
        <View style={styles.battery}>
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
      <View style={styles.statusbar1}>
        <Image
          style={styles.statusbar1Child}
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
          <Pressable
            style={styles.materialSymbolshome}
            onPress={() => navigation.navigate("StartPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/materialsymbolshome3.png")}
            />
          </Pressable>
          <Pressable
            style={styles.materialSymbolssearchLayout}
            onPress={() => navigation.navigate("SearchPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/materialsymbolssearch.png")}
            />
          </Pressable>
          <Pressable
            style={styles.materialSymbolssearchLayout}
            onPress={() => navigation.navigate("SharePage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/materialsymbolsadd.png")}
            />
          </Pressable>
          <Image
            style={[
              styles.fluentchat28RegularIcon,
              styles.materialSymbolssearchLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/fluentchat28regular.png")}
          />
          <Pressable
            style={styles.materialSymbolssearchLayout}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
          </Pressable>
        </LinearGradient>
      </View>
      <View style={styles.monthSelector}>
        <Text style={[styles.march2024, styles.moClr]}>March 2024</Text>
        <View style={styles.arrows}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/previous.png")}
          />
          <Image
            style={[styles.nextIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/next.png")}
          />
        </View>
      </View>
      <View style={[styles.calendarEvents, styles.week02Position]}>
        <View style={[styles.weekdaysWeeks, styles.weekdaysPosition]}>
          <View style={styles.week01}>
            <Text style={[styles.text, styles.textTypo10]}>1</Text>
            <Text style={[styles.text1, styles.textTypo11]}>2</Text>
            <Text style={[styles.text2, styles.textTypo11]}>3</Text>
            <Text style={[styles.text3, styles.textTypo10]}>1</Text>
            <Text style={[styles.text4, styles.textTypo11]}>2</Text>
            <Text style={[styles.text5, styles.textTypo11]}>4</Text>
            <Text style={[styles.text6, styles.textClr]}>3</Text>
          </View>
          <View style={[styles.week02, styles.week02Position]}>
            <Image
              style={styles.currentDayIcon}
              resizeMode="cover"
              source={require("../assets/current-day.png")}
            />
            <Text style={[styles.text7, styles.textTypo9]}>3</Text>
            <Text style={[styles.text8, styles.textTypo8]}>5</Text>
            <Text style={[styles.text9, styles.textTypo8]}>6</Text>
            <Text style={[styles.text10, styles.textTypo11]}>7</Text>
            <Text style={[styles.text11, styles.textTypo8]}>8</Text>
            <Text style={[styles.text12, styles.textTypo8]}>9</Text>
            <Text style={[styles.text13, styles.textTypo8]}>10</Text>
          </View>
          <Text style={[styles.text14, styles.textTypo11]}>11</Text>
          <View style={[styles.week03, styles.week03Position]}>
            <Text style={[styles.text15, styles.textTypo11]}>12</Text>
            <Text style={[styles.text16, styles.textTypo11]}>13</Text>
            <Text style={[styles.text17, styles.textTypo11]}>14</Text>
            <Text style={[styles.text18, styles.textTypo11]}>15</Text>
            <Text style={[styles.text19, styles.textTypo7]}>16</Text>
            <Text style={[styles.text20, styles.textTypo9]}>17</Text>
          </View>
          <Text style={[styles.text21, styles.week03Position]}>18</Text>
          <View style={styles.week05}>
            <Text style={[styles.text22, styles.textTypo11]}>26</Text>
            <Text style={[styles.text23, styles.textTypo11]}>27</Text>
            <Text style={[styles.text24, styles.textTypo11]}>28</Text>
            <Text style={[styles.text25, styles.textTypo11]}>29</Text>
            <Text style={[styles.text26, styles.textTypo11]}>30</Text>
            <Text style={[styles.text27, styles.textTypo11]}>31</Text>
            <Text style={[styles.text28, styles.text28Typo]}>30</Text>
          </View>
          <View style={[styles.week04, styles.week04Position]}>
            <Text style={[styles.text15, styles.textTypo11]}>19</Text>
            <Text style={[styles.text30, styles.textTypo11]}>20</Text>
            <Text style={[styles.text31, styles.textTypo11]}>21</Text>
            <Text style={[styles.text32, styles.textTypo11]}>22</Text>
            <Text style={[styles.text33, styles.textTypo7]}>23</Text>
            <Text style={[styles.text34, styles.textTypo11]}>24</Text>
          </View>
          <Text style={[styles.text35, styles.week04Position]}>25</Text>
          <Text style={[styles.text36, styles.textTypo5]}>.</Text>
          <Text style={[styles.text37, styles.textTypo5]}>.</Text>
          <Text style={[styles.text38, styles.textTypo5]}>.</Text>
          <Text style={[styles.text39, styles.textTypo4]}>.</Text>
          <Text style={[styles.text40, styles.textTypo5]}>.</Text>
          <Text style={[styles.text41, styles.textPosition]}>.</Text>
          <Text style={[styles.text42, styles.textTypo5]}>.</Text>
          <Text style={[styles.text43, styles.textTypo3]}>.</Text>
          <Text style={[styles.text44, styles.textTypo3]}>.</Text>
          <Text style={[styles.text45, styles.textTypo2]}>.</Text>
          <Text style={[styles.text46, styles.textTypo1]}>.</Text>
          <Text style={[styles.text47, styles.textTypo]}>.</Text>
          <Text style={[styles.text48, styles.textTypo5]}>.</Text>
          <Text style={[styles.text49, styles.textTypo5]}>.</Text>
          <Text style={[styles.text50, styles.textTypo5]}>.</Text>
          <Text style={[styles.text51, styles.textTypo2]}>.</Text>
          <Text style={[styles.text52, styles.textTypo5]}>.</Text>
          <Text style={[styles.text53, styles.textTypo1]}>.</Text>
          <Text style={[styles.text54, styles.textTypo5]}>.</Text>
          <Text style={[styles.text55, styles.textTypo4]}>.</Text>
          <Text style={[styles.text56, styles.textTypo]}>.</Text>
        </View>
        <View style={[styles.weekdays, styles.weekdaysPosition]}>
          <Text style={[styles.mo, styles.textTypo11]}>Mo</Text>
          <Text style={[styles.tu, styles.tuTypo]}>Tu</Text>
          <Text style={[styles.we, styles.tuTypo]}>We</Text>
          <Text style={[styles.th, styles.tuTypo]}>Th</Text>
          <Text style={[styles.fr, styles.tuTypo]}>Fr</Text>
          <Text style={[styles.sa, styles.tuTypo]}>Sa</Text>
          <Text style={[styles.sa, styles.tuTypo]}>Su</Text>
        </View>
      </View>
      <Text style={[styles.school, styles.schoolTypo]}>School</Text>
      <Text style={[styles.workouts, styles.schoolTypo]}>Workouts</Text>
      <Text style={[styles.others, styles.schoolTypo]}>Others</Text>
      <View
        style={[styles.nothingPlannedTodayHaveAWrapper, styles.wrapperLayout]}
      >
        <Text
          style={[styles.nothingPlannedToday, styles.nothingPlannedTodayTypo]}
        >{`Nothing planned Today! 
Have a good rest.`}</Text>
      </View>
      <View
        style={[styles.yourGoalIs2ExercisePerWeWrapper, styles.wrapperLayout]}
      >
        <Text
          style={[styles.yourGoalIsContainer, styles.nothingPlannedTodayTypo]}
        >
          <Text style={styles.yourGoalIsContainer1}>
            <Text style={styles.yourGoalIs}>{`Your goal is `}</Text>
            <Text style={styles.exercisePerWeek}>2 exercise per week</Text>
            <Text style={styles.yourGoalIs}>
              . Maybe one more for next week?
            </Text>
          </Text>
        </Text>
      </View>
      <View style={styles.suggestionAtWeekendWrapper}>
        <Text style={styles.suggestionAtWeekend}>{`Suggestion: 
At weekend`}</Text>
      </View>
      <Image
        style={styles.maincalendarChild}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.maincalendarItem, styles.maincalendarPosition]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.maincalendarInner, styles.maincalendarPosition]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Pressable
        style={[styles.addInCalendarParent, styles.addLayout]}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Text style={[styles.addInCalendar, styles.addLayout]}>
          Add in Calendar
        </Text>
        <Image
          style={styles.chevronbackwardIcon}
          resizeMode="cover"
          source={require("../assets/chevronbackward2.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  materialSymbolssearchLayout: {
    marginLeft: 50,
    height: 32,
    width: 32,
  },
  moClr: {
    color: Color.lightPrimary,
    display: "flex",
  },
  iconLayout: {
    width: 11,
    height: 11,
  },
  week02Position: {
    left: 8,
    position: "absolute",
  },
  weekdaysPosition: {
    left: 13,
    position: "absolute",
  },
  textTypo10: {
    width: 12,
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    height: 28,
    fontSize: FontSize.default_size,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  textTypo11: {
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textClr: {
    color: Color.lightSelected,
    width: 16,
  },
  textTypo9: {
    left: 297,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    display: "flex",
    fontSize: FontSize.default_size,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  textTypo8: {
    top: 61,
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    display: "flex",
    fontSize: FontSize.default_size,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  week03Position: {
    top: 118,
    height: 28,
    position: "absolute",
  },
  textTypo7: {
    left: 239,
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    height: 28,
    display: "flex",
    fontSize: FontSize.default_size,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  text28Typo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.default_size,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  week04Position: {
    top: 170,
    height: 28,
    position: "absolute",
  },
  textTypo5: {
    width: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_45xl,
    height: 76,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo4: {
    left: 111,
    height: 76,
    width: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  textPosition: {
    left: 246,
    color: Color.colorLimegreen,
  },
  textTypo3: {
    left: 7,
    height: 76,
    width: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo2: {
    left: 72,
    color: Color.colorLimegreen,
    height: 76,
    width: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo1: {
    left: 193,
    height: 76,
    width: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    top: 89,
    height: 76,
    width: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  tuTypo: {
    marginLeft: 28,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    display: "flex",
    color: Color.lightPrimary,
    fontSize: FontSize.default_size,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  schoolTypo: {
    height: 36,
    top: 437,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.default_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  wrapperLayout: {
    width: 407,
    backgroundColor: Color.colorMidnightblue_200,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  nothingPlannedTodayTypo: {
    width: 344,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  maincalendarPosition: {
    left: -2,
    height: 2,
    width: 430,
    position: "absolute",
  },
  addLayout: {
    width: 178,
    position: "absolute",
  },
  capIcon: {
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    top: 4,
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
    right: 17,
    borderRadius: 3,
    borderColor: "rgba(0, 0, 0, 0.35)",
    width: 22,
    height: 11,
    borderWidth: 1,
    borderStyle: "solid",
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
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    color: Color.colorBlack,
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
    left: 33,
    width: 363,
    height: 44,
    top: 11,
    position: "absolute",
  },
  statusbar1Child: {
    top: 10,
    left: 259,
    width: 75,
    height: 45,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  materialSymbolshome: {
    height: 32,
    width: 32,
  },
  fluentchat28RegularIcon: {
    overflow: "hidden",
  },
  materialSymbolshomeParent: {
    marginLeft: -215,
    bottom: 0,
    left: "50%",
    borderRadius: Border.br_xs,
    borderColor: Color.colorGray_300,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 78,
    width: 430,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: "transparent",
  },
  statusbar1: {
    top: 854,
    height: 78,
    width: 430,
    left: 0,
    position: "absolute",
  },
  march2024: {
    width: 151,
    display: "flex",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    fontSize: FontSize.default_size,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    left: 0,
  },
  nextIcon: {
    marginLeft: 16,
  },
  arrows: {
    top: 9,
    width: 41,
    alignItems: "center",
    flexDirection: "row",
    right: 0,
    position: "absolute",
  },
  monthSelector: {
    top: 77,
    left: 22,
    width: 385,
    height: 29,
    position: "absolute",
  },
  text: {
    left: 208,
    display: "none",
  },
  text1: {
    left: 142,
    display: "none",
    color: Color.lightSecondary,
    height: 28,
    top: 0,
    width: 15,
    position: "absolute",
  },
  text2: {
    left: 77,
    width: 16,
    display: "none",
    color: Color.lightSecondary,
    height: 28,
    top: 0,
    position: "absolute",
  },
  text3: {
    display: "flex",
    left: 0,
  },
  text4: {
    left: 53,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    width: 15,
    position: "absolute",
  },
  text5: {
    left: 167,
    width: 16,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text6: {
    left: 110,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  week01: {
    top: 16,
    left: 195,
    width: 183,
    height: 28,
    position: "absolute",
  },
  currentDayIcon: {
    left: 279,
    width: 52,
    height: 52,
    top: 0,
    position: "absolute",
  },
  text7: {
    color: Color.lightSelected,
    width: 16,
    height: 32,
    top: 11,
  },
  text8: {
    left: 0,
    width: 15,
  },
  text9: {
    left: 64,
    width: 16,
  },
  text10: {
    top: 62,
    left: 124,
    width: 14,
    color: Color.lightSecondary,
    display: "flex",
    height: 32,
    position: "absolute",
  },
  text11: {
    left: 187,
    width: 16,
  },
  text12: {
    left: 240,
    width: 16,
  },
  text13: {
    left: 291,
    width: 27,
  },
  week02: {
    width: 331,
    height: 93,
    top: 4,
    left: 8,
  },
  text14: {
    top: 65,
    left: 360,
    width: 23,
    color: Color.lightSecondary,
    display: "flex",
    height: 32,
    position: "absolute",
  },
  text15: {
    width: 27,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    left: 0,
    position: "absolute",
  },
  text16: {
    left: 65,
    width: 27,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text17: {
    left: 123,
    width: 28,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text18: {
    left: 186,
    width: 27,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text19: {
    width: 27,
  },
  text20: {
    width: 26,
    color: Color.lightSecondary,
    height: 28,
    top: 0,
  },
  week03: {
    width: 323,
    left: 3,
  },
  text21: {
    left: 356,
    width: 27,
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
  },
  text22: {
    width: 30,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    left: 0,
    position: "absolute",
  },
  text23: {
    left: 61,
    width: 29,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text24: {
    left: 120,
    width: 30,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text25: {
    left: 184,
    width: 30,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text26: {
    left: 238,
    width: 31,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text27: {
    left: 295,
    width: 27,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text28: {
    left: 380,
    width: 33,
    display: "none",
    color: Color.lightSecondary,
    height: 28,
  },
  week05: {
    top: 222,
    left: 4,
    width: 322,
    height: 28,
    position: "absolute",
  },
  text30: {
    left: 63,
    width: 31,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text31: {
    left: 122,
    width: 27,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text32: {
    left: 183,
    width: 30,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  text33: {
    width: 31,
  },
  text34: {
    left: 294,
    width: 31,
    color: Color.lightSecondary,
    height: 28,
    display: "flex",
    top: 0,
    position: "absolute",
  },
  week04: {
    width: 325,
    left: 3,
  },
  text35: {
    left: 355,
    width: 30,
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
  },
  text36: {
    left: 230,
    height: 76,
    top: -14,
    width: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_45xl,
  },
  text37: {
    left: 247,
    color: Color.colorLimegreen,
    top: 35,
    height: 76,
  },
  text38: {
    left: 179,
    top: 35,
    height: 76,
  },
  text39: {
    top: 141,
  },
  text40: {
    left: 229,
    top: 193,
    height: 76,
  },
  text41: {
    height: 76,
    width: 35,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_45xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
    top: -14,
  },
  text42: {
    left: 192,
    top: 193,
    color: Color.colorLimegreen,
    height: 76,
  },
  text43: {
    top: 90,
    color: Color.colorLimegreen,
  },
  text44: {
    color: Color.colorCrimson,
    top: 35,
  },
  text45: {
    top: 90,
  },
  text46: {
    top: 90,
    color: Color.colorLimegreen,
  },
  text47: {
    left: 246,
    color: Color.colorLimegreen,
  },
  text48: {
    left: 130,
    top: 141,
    color: Color.colorLimegreen,
    height: 76,
  },
  text49: {
    left: 73,
    color: Color.colorLimegreen,
    top: 35,
    height: 76,
  },
  text50: {
    left: 132,
    color: Color.colorLimegreen,
    top: 35,
    height: 76,
  },
  text51: {
    top: 193,
  },
  text52: {
    left: 343,
    top: 141,
    height: 76,
  },
  text53: {
    color: Color.colorCrimson,
    top: 141,
  },
  text54: {
    top: 193,
    height: 76,
    left: 53,
  },
  text55: {
    top: 90,
  },
  text56: {
    left: 288,
  },
  weekdaysWeeks: {
    top: 43,
    width: 384,
    height: 272,
  },
  mo: {
    width: 36,
    display: "flex",
    color: Color.lightPrimary,
  },
  tu: {
    width: 29,
  },
  we: {
    width: 37,
  },
  th: {
    width: 31,
  },
  fr: {
    width: 24,
  },
  sa: {
    width: 30,
  },
  weekdays: {
    width: 389,
    top: 14,
    height: 28,
    flexDirection: "row",
    left: 13,
  },
  calendarEvents: {
    top: 116,
    width: 413,
    height: 312,
    overflow: "hidden",
  },
  school: {
    left: 17,
    width: 110,
    color: Color.colorLimegreen,
  },
  workouts: {
    left: 147,
    color: Color.colorMediumslateblue,
    width: 141,
  },
  others: {
    left: 304,
    width: 104,
    color: Color.colorCrimson,
  },
  nothingPlannedToday: {
    top: 24,
    left: 15,
    color: Color.colorRoyalblue,
    height: 28,
  },
  nothingPlannedTodayHaveAWrapper: {
    top: 507,
    left: 12,
    height: 76,
  },
  yourGoalIs: {
    color: Color.colorRoyalblue,
  },
  exercisePerWeek: {
    color: Color.colorBlack,
  },
  yourGoalIsContainer1: {
    width: "100%",
  },
  yourGoalIsContainer: {
    left: 16,
    top: 14,
    height: 52,
  },
  yourGoalIs2ExercisePerWeWrapper: {
    top: 620,
    left: 14,
    height: 100,
  },
  suggestionAtWeekend: {
    marginTop: -17,
    fontSize: FontSize.size_base,
    lineHeight: 14,
    color: Color.colorDimgray_100,
    width: 93,
    height: 26,
    textAlign: "left",
    fontFamily: FontFamily.default,
    fontWeight: "500",
    left: 13,
    top: "50%",
    position: "absolute",
  },
  suggestionAtWeekendWrapper: {
    top: 689,
    left: 276,
    backgroundColor: Color.lightSelected,
    width: 119,
    height: 60,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  maincalendarChild: {
    top: 489,
    left: 1,
    height: 2,
    width: 430,
    position: "absolute",
  },
  maincalendarItem: {
    top: 600,
  },
  maincalendarInner: {
    top: 765,
  },
  addInCalendar: {
    height: 35,
    fontSize: FontSize.size_xl,
    width: 178,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightSelected,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    top: 7,
  },
  chevronbackwardIcon: {
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
    top: 783,
    left: 129,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    height: 44,
  },
  maincalendar: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default MainCalendar;
