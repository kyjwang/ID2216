const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StartPage from "./screens/StartPage";
import FrameComponentSet from "./components/FrameComponentSet";
import FrameInstance from "./components/FrameInstance";
import Calendar from "./screens/Calendar";
import ConfirmedCalendar from "./screens/ConfirmedCalendar";
import Ellipse from "./components/Ellipse";
import PostDetail from "./screens/PostDetail";
import SharePage from "./screens/SharePage";
import SearchPage from "./screens/SearchPage";
import MainCalendar from "./screens/MainCalendar";
import MainCalendar1 from "./screens/MainCalendar1";
import Profile from "./screens/Profile";
import Frame from "./screens/Frame";
import Text1 from "./components/Text1";
import Ellipse1 from "./components/Ellipse1";
import Ellipse2 from "./components/Ellipse2";
import Ellipse3 from "./components/Ellipse3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="StartPage"
              component={StartPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Calendar"
              component={Calendar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmedCalendar"
              component={ConfirmedCalendar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostDetail"
              component={PostDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SharePage"
              component={SharePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchPage"
              component={SearchPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainCalendar"
              component={MainCalendar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainCalendar1"
              component={MainCalendar1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <MainCalendar1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
