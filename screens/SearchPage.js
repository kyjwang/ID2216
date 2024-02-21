import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SearchPage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.searchPage}
      locations={[0, 0.82, 0.99]}
      colors={["#e9e7d1", "#eeecd6", "rgba(22, 23, 25, 0.8)"]}
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
          style={[styles.statusbar1Child, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <LinearGradient
          style={[styles.materialSymbolshomeParent, styles.statusbar1Layout]}
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
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/materialsymbolshome2.png")}
            />
          </Pressable>
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
      <View style={styles.typeKeyboardParent}>
        <Text style={styles.typeKeyboard}>Type Keyboard...</Text>
        <View style={[styles.searchParent, styles.borderPosition]}>
          <View style={styles.search} />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
        </View>
      </View>
      <Text style={[styles.popularTeam, styles.popularTeamTypo]}>
        Popular Team
      </Text>
      <Text style={[styles.trendingSportsIn, styles.popularTeamTypo]}>
        Trending Sports in your School
      </Text>
      <Text style={[styles.eventsYouMay, styles.popularTeamTypo]}>
        Events you may be interested
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    top: 11,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  statusbar1Layout: {
    height: 78,
    width: 430,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  materialLayout: {
    marginLeft: 50,
    height: 32,
    width: 32,
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  popularTeamTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorBlack,
    width: 22,
    opacity: 0.35,
    top: 0,
    position: "absolute",
    height: 11,
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
    top: "50%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
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
    left: 33,
    width: 363,
    height: 44,
  },
  statusbar1Child: {
    left: 95,
    width: 75,
    height: 45,
  },
  icon: {
    overflow: "hidden",
  },
  materialSymbolshome: {
    height: 32,
    width: 32,
  },
  materialSymbolssearchIcon: {
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
    backgroundColor: "transparent",
  },
  statusbar1: {
    top: 854,
    left: 0,
    height: 78,
    width: 430,
  },
  typeKeyboard: {
    top: 9,
    left: 63,
    fontFamily: FontFamily.interRegular,
    color: "#918484",
    textAlign: "left",
    width: 206,
    height: 31,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  search: {
    top: 5,
    left: 8,
    width: 41,
    height: 30,
    position: "absolute",
  },
  vectorIcon: {
    height: "51.02%",
    width: "39.68%",
    top: "16.33%",
    right: "34.92%",
    bottom: "32.65%",
    left: "25.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchParent: {
    left: 285,
    backgroundColor: Color.colorCornflowerblue,
    width: 63,
    height: 49,
    overflow: "hidden",
  },
  typeKeyboardParent: {
    top: 183,
    left: 49,
    borderRadius: 20,
    backgroundColor: Color.lightSelected,
    width: 346,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  popularTeam: {
    top: 448,
    left: 121,
    width: 188,
    height: 35,
  },
  trendingSportsIn: {
    top: 626,
    left: 53,
    color: Color.colorRoyalblue,
    width: 327,
    height: 30,
  },
  eventsYouMay: {
    top: 269,
    left: 68,
    width: 298,
    height: 30,
  },
  searchPage: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchPage;
