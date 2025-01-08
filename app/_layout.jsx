import { DarkTheme, DefaultTheme, ThemeProvider, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {View, Text} from "react-native"
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Screens/Home";
import Details from "../Screens/Details"


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

const [loaded] = useFonts({
  "Inter-SemiBold" : require("./assets/fonts/Inter-SemiBold.ttf"),
  "Inter-Light" : require("./assets/fonts/Inter-Light.ttf"),
  "Inter-Medium" : require("./assets/fonts/Inter-Medium.ttf"),
  "Inter-Regular" : require("./assets/fonts/Inter-Regular.ttf"),
  "Inter-Bold" : require("./assets/fonts/Inter-Bold.ttf")
});
 
  
  useEffect(() => { 
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Stack = createStackNavigator()
  const theme ={
   ...DefaultTheme,colors :{
   background : "transparent",
     ...DefaultTheme.colors
  }
 }
  return (
  <Stack.Navigator screenOptions={{headerShown :false}} initialRouteName ="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
 
 
 
     
  );
}
