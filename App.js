import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import {HomeScreen, AddTaskScreen, ProfileScreen} from "./Screens/index"


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="home" size={28} color="#CDCCCE" />
      }
    },
    AddTask: {
      screen: AddTaskScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="plus" size={28} color="#CDCCCE" />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="user" size={28} color="#CDCCCE" />
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#81B247',
    }
  }
);

export default createAppContainer(TabNavigator);