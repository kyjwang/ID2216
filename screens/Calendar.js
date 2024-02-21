import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Calendar = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.calendar}
      locations={[0, 0.85, 0.99]}
      colors={["#e9e7d1", "#eeecd6", "#161719"]}
      useAngle={true}
      angle={180}
    >
      <View style={styles.calendarEvents}>
        <View style={styles.weekdaysWeeks}>
          <View style={styles.week01}>
            <Text style={[styles.text, styles.textLayout]}>1</Text>
            <Text style={[styles.text1, styles.textFlexBox]}>2</Text>
            <Text style={[styles.text2, styles.textFlexBox]}>3</Text>
            <Text style={[styles.text3, styles.textTypo2]}>1</Text>
            <Text style={[styles.text4, styles.textTypo2]}>2</Text>
            <Text style={[styles.text5, styles.textTypo2]}>3</Text>
            <Text style={[styles.text6, styles.textTypo2]}>4</Text>
          </View>
          <View style={[styles.week02, styles.week02Layout]}>
            <Text style={[styles.text7, styles.textTypo1]}>5</Text>
            <Text style={[styles.text8, styles.textTypo1]}>6</Text>
            <Text style={[styles.text9, styles.textTypo1]}>7</Text>
            <Image
              style={[styles.currentDayIcon, styles.week02Layout]}
              resizeMode="cover"
              source={require("../assets/current-day.png")}
            />
            <Text style={[styles.text10, styles.text10Clr]}>8</Text>
            <Text style={[styles.text11, styles.textTypo1]}>9</Text>
            <Text style={[styles.text12, styles.textTypo1]}>10</Text>
          </View>
          <Text style={[styles.text13, styles.textTypo1]}>11</Text>
          <View style={[styles.week03, styles.week03Position]}>
            <Text style={[styles.text14, styles.textTypo2]}>12</Text>
            <Text style={[styles.text15, styles.textTypo2]}>13</Text>
            <Text style={[styles.text16, styles.text16Layout]}>14</Text>
            <Text style={[styles.text17, styles.textTypo2]}>15</Text>
            <Text style={[styles.text18, styles.textTypo]}>16</Text>
            <Text style={[styles.text19, styles.textTypo2]}>17</Text>
          </View>
          <Text style={[styles.text20, styles.week03Position]}>18</Text>
          <View style={styles.week05}>
            <Text style={[styles.text21, styles.textTypo2]}>26</Text>
            <Text style={[styles.text22, styles.textTypo2]}>27</Text>
            <Text style={[styles.text23, styles.textTypo2]}>28</Text>
            <Text style={[styles.text24, styles.textTypo2]}>29</Text>
            <Text style={[styles.text25, styles.textTypo2]}>30</Text>
            <Text style={[styles.text26, styles.textTypo2]}>31</Text>
            <Text style={[styles.text27, styles.text27Typo]}>30</Text>
          </View>
          <View style={[styles.week04, styles.week04Position]}>
            <Text style={[styles.text14, styles.textTypo2]}>19</Text>
            <Text style={[styles.text29, styles.textTypo2]}>20</Text>
            <Text style={[styles.text30, styles.textTypo2]}>21</Text>
            <Text style={[styles.text31, styles.textTypo2]}>22</Text>
            <Text style={[styles.text32, styles.textTypo]}>23</Text>
            <Text style={[styles.text33, styles.textTypo2]}>24</Text>
          </View>
          <Text style={[styles.text34, styles.week04Position]}>25</Text>
        </View>
        <View style={[styles.weekdays, styles.arrowsFlexBox]}>
          <Text style={[styles.mo, styles.moFlexBox]}>Mo</Text>
          <Text style={[styles.tu, styles.tuTypo]}>Tu</Text>
          <Text style={[styles.we, styles.tuTypo]}>We</Text>
          <Text style={[styles.th, styles.tuTypo]}>Th</Text>
          <Text style={[styles.fr, styles.tuTypo]}>Fr</Text>
          <Text style={[styles.sa, styles.tuTypo]}>Sa</Text>
          <Text style={[styles.sa, styles.tuTypo]}>Su</Text>
        </View>
      </View>
      <Text style={[styles.productDevelopmentE7, styles.pm9pmTypo]}>
        Product Development E7
      </Text>
      <Text style={[styles.communicationSeminarU4, styles.am12amTypo]}>
        Communication Seminar U4
      </Text>
      <Text style={[styles.dinnerHome, styles.am12amTypo]}>Dinner Home</Text>
      <Text style={[styles.am12am, styles.am12amTypo]}>10am ~ 12am</Text>
      <Text style={[styles.pm430am, styles.am12amTypo]}>3pm ~ 4:30am</Text>
      <Text style={[styles.pm9pm, styles.pm9pmTypo]}>8pm ~ 9pm</Text>
      <View style={styles.pmPmParent}>
        <Text style={[styles.pm, styles.pmTypo]}>5pm ~ ?? pm</Text>
        <Text style={[styles.footballHall, styles.pmTypo]}>Football Hall</Text>
      </View>
      <View style={styles.monthSelector}>
        <Text style={[styles.march2024, styles.moFlexBox]}>March 2024</Text>
        <View style={[styles.arrows, styles.arrowsFlexBox]}>
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
      <Pressable
        style={[styles.confirmParent, styles.confirmLayout]}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Text style={[styles.confirm, styles.confirmLayout]}>Confirm</Text>
        <Image
          style={styles.chevronbackwardIcon}
          resizeMode="cover"
          source={require("../assets/chevronbackward.png")}
        />
      </Pressable>
      <Image
        style={[styles.calendarChild, styles.calendarChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.calendarItem, styles.calendarChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.calendarInner, styles.calendarChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.lineIcon, styles.calendarChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={[styles.calendarChild1, styles.calendarChildLayout]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Pressable
        style={[styles.chevronbackwardWrapper, styles.arrowsFlexBox]}
        onPress={() => navigation.navigate("PostDetail")}
      >
        <Image
          style={[styles.chevronbackwardIcon1, styles.text16Layout]}
          resizeMode="cover"
          source={require("../assets/chevronbackward1.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    width: 12,
    top: 0,
    height: 28,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
  },
  week02Layout: {
    height: 52,
    position: "absolute",
  },
  textTypo1: {
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    position: "absolute",
  },
  text10Clr: {
    color: Color.lightSelected,
    textAlign: "center",
  },
  week03Position: {
    top: 118,
    height: 28,
    position: "absolute",
  },
  text16Layout: {
    width: 28,
    height: 28,
  },
  textTypo: {
    left: 239,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text27Typo: {
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  week04Position: {
    top: 170,
    height: 28,
    position: "absolute",
  },
  arrowsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  moFlexBox: {
    color: Color.lightPrimary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: FontSize.default_size,
  },
  tuTypo: {
    marginLeft: 28,
    color: Color.lightPrimary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
  },
  pm9pmTypo: {
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    height: 28,
    position: "absolute",
  },
  am12amTypo: {
    left: 24,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    height: 28,
    position: "absolute",
  },
  pmTypo: {
    color: Color.colorRoyalblue,
    left: 12,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    height: 28,
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    width: 11,
  },
  confirmLayout: {
    width: 116,
    position: "absolute",
  },
  calendarChildLayout: {
    height: 2,
    width: 430,
    position: "absolute",
  },
  text: {
    left: 208,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    fontSize: FontSize.default_size,
    textAlign: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
  },
  text1: {
    left: 142,
    width: 15,
    display: "none",
    fontSize: FontSize.default_size,
    justifyContent: "center",
    textAlign: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    top: 0,
    height: 28,
    position: "absolute",
  },
  text2: {
    left: 77,
    width: 16,
    display: "none",
    fontSize: FontSize.default_size,
    justifyContent: "center",
    textAlign: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    top: 0,
    height: 28,
    position: "absolute",
  },
  text3: {
    left: 0,
    width: 12,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text4: {
    left: 53,
    width: 15,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text5: {
    left: 110,
    width: 16,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text6: {
    left: 167,
    width: 16,
    top: 0,
    height: 28,
    position: "absolute",
  },
  week01: {
    top: 16,
    left: 195,
    width: 183,
    height: 28,
    position: "absolute",
  },
  text7: {
    top: 10,
    left: 0,
    width: 15,
    textAlign: "center",
    color: Color.lightSecondary,
    height: 32,
  },
  text8: {
    left: 64,
    top: 10,
    width: 16,
    textAlign: "center",
    color: Color.lightSecondary,
    height: 32,
  },
  text9: {
    top: 11,
    left: 124,
    width: 14,
    textAlign: "center",
    color: Color.lightSecondary,
    height: 32,
  },
  currentDayIcon: {
    left: 169,
    width: 52,
    top: 0,
  },
  text10: {
    left: 187,
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    position: "absolute",
    top: 10,
    width: 16,
  },
  text11: {
    left: 240,
    top: 10,
    width: 16,
    textAlign: "center",
    color: Color.lightSecondary,
    height: 32,
  },
  text12: {
    left: 291,
    width: 27,
    top: 10,
    textAlign: "center",
    color: Color.lightSecondary,
    height: 32,
  },
  week02: {
    top: 55,
    width: 318,
    left: 8,
  },
  text13: {
    top: 65,
    left: 360,
    width: 23,
    textAlign: "center",
    color: Color.lightSecondary,
    height: 32,
  },
  text14: {
    width: 27,
    left: 0,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text15: {
    left: 65,
    width: 27,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text16: {
    left: 123,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
    top: 0,
    position: "absolute",
  },
  text17: {
    left: 186,
    width: 27,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text18: {
    width: 27,
  },
  text19: {
    left: 297,
    width: 26,
    top: 0,
    height: 28,
    position: "absolute",
  },
  week03: {
    width: 323,
    left: 3,
  },
  text20: {
    left: 356,
    width: 27,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
  },
  text21: {
    width: 30,
    left: 0,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text22: {
    left: 61,
    width: 29,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text23: {
    left: 120,
    width: 30,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text24: {
    left: 184,
    width: 30,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text25: {
    left: 238,
    width: 31,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text26: {
    left: 295,
    width: 27,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text27: {
    left: 380,
    width: 33,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    fontSize: FontSize.default_size,
    textAlign: "center",
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
  text29: {
    left: 63,
    width: 31,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text30: {
    left: 122,
    width: 27,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text31: {
    left: 183,
    width: 30,
    top: 0,
    height: 28,
    position: "absolute",
  },
  text32: {
    width: 31,
  },
  text33: {
    left: 294,
    width: 31,
    top: 0,
    height: 28,
    position: "absolute",
  },
  week04: {
    width: 325,
    left: 3,
  },
  text34: {
    left: 355,
    width: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.lightSecondary,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    fontSize: FontSize.default_size,
  },
  weekdaysWeeks: {
    top: 43,
    height: 272,
    width: 384,
    left: 13,
    position: "absolute",
  },
  mo: {
    width: 36,
    fontFamily: FontFamily.default,
    fontWeight: "500",
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
    top: 14,
    width: 389,
    height: 28,
    left: 13,
  },
  calendarEvents: {
    top: 134,
    width: 413,
    height: 303,
    left: 8,
    position: "absolute",
    overflow: "hidden",
  },
  productDevelopmentE7: {
    top: 490,
    left: 23,
    width: 387,
  },
  communicationSeminarU4: {
    top: 577,
    width: 384,
  },
  dinnerHome: {
    top: 809,
    width: 379,
  },
  am12am: {
    top: 462,
    width: 154,
  },
  pm430am: {
    top: 549,
    width: 192,
  },
  pm9pm: {
    top: 781,
    left: 25,
    width: 192,
  },
  pm: {
    width: 192,
    top: 10,
  },
  footballHall: {
    top: 38,
    width: 371,
  },
  pmPmParent: {
    top: 632,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorMidnightblue_200,
    width: 407,
    height: 76,
    left: 13,
    position: "absolute",
  },
  march2024: {
    width: 151,
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
    left: 0,
  },
  nextIcon: {
    marginLeft: 16,
  },
  arrows: {
    top: 9,
    right: 0,
    width: 41,
    alignItems: "center",
    flexDirection: "row",
  },
  monthSelector: {
    top: 95,
    left: 19,
    width: 385,
    height: 29,
    position: "absolute",
  },
  confirm: {
    top: 7,
    fontSize: FontSize.size_xl,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    height: 35,
    color: Color.lightSelected,
    textAlign: "center",
    left: 0,
  },
  chevronbackwardIcon: {
    height: "75.68%",
    width: "30.78%",
    top: "-9.09%",
    right: "-15.26%",
    bottom: "33.41%",
    left: "84.48%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  confirmParent: {
    top: 713,
    left: 303,
    backgroundColor: Color.colorCornflowerblue,
    height: 44,
    borderRadius: Border.br_3xs,
  },
  calendarChild: {
    top: 130,
    left: 0,
  },
  calendarItem: {
    top: 443,
    left: -2,
  },
  calendarInner: {
    top: 532,
    left: 2,
  },
  lineIcon: {
    top: 622,
    left: 3,
  },
  calendarChild1: {
    top: 765,
    left: 3,
  },
  chevronbackwardIcon1: {
    overflow: "hidden",
  },
  chevronbackwardWrapper: {
    top: 41,
    left: 38,
    backgroundColor: Color.colorMidnightblue_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 73,
    height: 37,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Calendar;
