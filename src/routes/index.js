import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomePage, Splash } from '../screens';

const HomeStack = createNativeStackNavigator();

const commonScreenOptions = {
  animation: "slide_from_right",
  gestureEnabled: false,
  gestureDirection: "vertical",
  headerShown: false,
};

const HomeStackScreens = () => {

  return (
    <HomeStack.Navigator initialRouteName="Splash"
      screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>

      <HomeStack.Screen options={commonScreenOptions} name="Splash" component={Splash} />
      <HomeStack.Screen options={commonScreenOptions} name="HomePage" component={HomePage} />




    </HomeStack.Navigator>
  );
};



export default HomeStackScreens;
