import React from "react";
import { createAppContainer, createNavigator, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TracklistScreen from "./src/screens/TracklistScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createSwitchNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    TrackListFlow: createStackNavigator({
TrackList: TracklistScreen,
TrackDetail: TrackDetailScreen
    }),
TrackCreate: TrackCreateScreen,
Account: AccountScreen

  })
})

export default createAppContainer(switchNavigator)