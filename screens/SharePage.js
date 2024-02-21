import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SharePage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.sharepage}
      locations={[0, 0.99]}
      colors={["#56688a", "#161719"]}
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.statusbar1, styles.statusbar1Layout]}>
        <Image
          style={[styles.statusbar1Child, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-41.png")}
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
              source={require("../assets/materialsymbolshome1.png")}
            />
          </Pressable>
          <Pressable
            style={styles.materialLayout}
            onPress={() => navigation.navigate("SearchPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/materialsymbolssearch1.png")}
            />
          </Pressable>
          <Image
            style={[styles.materialSymbolsaddIcon, styles.materialLayout]}
            resizeMode="cover"
            source={require("../assets/materialsymbolsadd1.png")}
          />
          <Pressable
            style={styles.materialLayout}
            onPress={() => navigation.navigate("MainCalendar")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/fluentchat28regular1.png")}
            />
          </Pressable>
          <Pressable
            style={styles.materialLayout}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
          </Pressable>
        </LinearGradient>
      </View>
      <View style={[styles.nameParent, styles.parentLayout]}>
        <Text style={styles.nameTypo}>Name</Text>
        <View style={styles.frameInnerPosition}>
          <View style={[styles.frameChild, styles.frameChildBorder]} />
          <Text style={[styles.melissaPeters, styles.kthTypo]}>
            Melissa Peters
          </Text>
        </View>
      </View>
      <View style={[styles.descriptionParent, styles.frameLayout]}>
        <Text style={styles.nameTypo}>Description</Text>
        <View style={[styles.frameItem, styles.frameChildBorder]} />
      </View>
      <Image
        style={styles.sharepageChild}
        resizeMode="cover"
        source={require("../assets/group-430.png")}
      />
      <View style={[styles.timedateParent, styles.parentLayout]}>
        <Text style={styles.nameTypo}>Time/Date</Text>
        <View style={[styles.frameInner, styles.frameChildBorder]} />
      </View>
      <View style={styles.categoriesParent}>
        <Text style={[styles.categories, styles.nameTypo]}>Categories</Text>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Text style={[styles.eventChallenge, styles.basketTypo]}>{`Event &
Challenge`}</Text>
        </View>
      </View>
      <View style={styles.sportParent}>
        <Text style={[styles.sport, styles.nameTypo]}>Sport</Text>
        <View style={[styles.rectangleContainer, styles.frameChild1Position]}>
          <View style={[styles.frameChild1, styles.frameChild1Position]} />
          <Text style={[styles.basket, styles.basketTypo]}>Basket</Text>
        </View>
      </View>
      <View style={[styles.universityParent, styles.parentLayout]}>
        <Text style={styles.nameTypo}>University</Text>
        <View style={styles.frameInnerPosition}>
          <View style={[styles.frameChild, styles.frameChildBorder]} />
          <Text style={[styles.kth, styles.kthTypo]}>KTH</Text>
        </View>
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <View style={styles.publishWrapper}>
        <Text style={[styles.publish, styles.timeTypo]}>Publish</Text>
      </View>
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
  timeTypo: {
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  statusbar1Layout: {
    height: 78,
    width: 433,
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
  parentLayout: {
    height: 69,
    width: 342,
    left: 49,
    position: "absolute",
  },
  frameChildBorder: {
    borderColor: Color.colorDimgray_200,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  kthTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    left: 15,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  frameLayout: {
    width: 342,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "700",
    lineHeight: 14,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 47,
    width: 132,
    left: 0,
    position: "absolute",
  },
  basketTypo: {
    left: 11,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.default,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  frameChild1Position: {
    height: 36,
    left: 0,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorBlack,
    width: 22,
    opacity: 0.35,
    top: 0,
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
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    top: "50%",
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    width: 54,
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
  },
  statusbar1Child: {
    left: 177,
    width: 76,
    height: 45,
  },
  icon: {
    overflow: "hidden",
  },
  materialSymbolshome: {
    height: 32,
    width: 32,
  },
  materialSymbolsaddIcon: {
    overflow: "hidden",
  },
  materialSymbolshomeParent: {
    marginLeft: -216.5,
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
    left: -1,
  },
  frameChild: {
    width: 342,
    position: "absolute",
    left: 0,
    borderRadius: Border.br_7xs,
    top: 0,
    height: 44,
  },
  melissaPeters: {
    marginTop: -7,
  },
  frameInnerPosition: {
    top: 25,
    width: 342,
    left: 0,
    height: 44,
    position: "absolute",
  },
  nameParent: {
    top: 232,
  },
  frameItem: {
    top: 35,
    height: 142,
    width: 342,
    position: "absolute",
    left: 0,
    borderRadius: Border.br_7xs,
  },
  descriptionParent: {
    top: 400,
    height: 177,
    left: 49,
    width: 342,
  },
  sharepageChild: {
    top: 112,
    left: 54,
    width: 173,
    height: 107,
    position: "absolute",
  },
  frameInner: {
    top: 25,
    width: 342,
    left: 0,
    height: 44,
    position: "absolute",
  },
  timedateParent: {
    top: 589,
  },
  categories: {
    width: 109,
    height: 11,
  },
  rectangleView: {
    borderColor: Color.colorDimgray_200,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  eventChallenge: {
    marginTop: -15.5,
    width: 89,
    height: 20,
  },
  rectangleGroup: {
    top: 20,
  },
  categoriesParent: {
    top: 166,
    left: 253,
    height: 67,
    width: 132,
    position: "absolute",
  },
  sport: {
    width: 111,
    height: 11,
  },
  frameChild1: {
    width: 134,
    borderColor: Color.colorDimgray_200,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  basket: {
    marginTop: -7.15,
    width: 129,
    height: 21,
  },
  rectangleContainer: {
    width: 140,
    top: 20,
  },
  sportParent: {
    top: 105,
    left: 251,
    height: 56,
    width: 140,
    position: "absolute",
  },
  kth: {
    marginTop: -6,
  },
  universityParent: {
    top: 310,
  },
  vectorIcon: {
    height: "1.87%",
    width: "2.56%",
    top: "21.67%",
    right: "13.26%",
    bottom: "76.46%",
    left: "84.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  publish: {
    left: 2,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightSelected,
    width: 100,
    height: 30,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    top: 7,
  },
  publishWrapper: {
    top: 699,
    left: 289,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    width: 102,
    height: 44,
    position: "absolute",
  },
  sharepage: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default SharePage;
