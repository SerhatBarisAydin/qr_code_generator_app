import React from 'react'
import { HomeScreen, CreateCodeScreen, ScanCodeScreen, HistoryScreen } from '../screens'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Assets from "../config/assets"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator initialRouteName='CreateCode'>
    <Tab.Screen
      name='CreateCode'
      component={CreateCodeScreen}
      options={{
                headerShown:false,

        title: "Create",
        tabBarIcon: ({ focused }) => (
          <Image source={Assets.images.icons.QRCODE}
            style={{ height: 30, width: 30, tintColor: focused ? "blue" : "gray"  }} />
        ),
      }}
    />
    <Tab.Screen
      name='ScanCode'
      component={ScanCodeScreen}
      options={{
        headerShown:false,
        title: "Scan",
        tabBarIcon: ({ focused }) => (
          <Image source={Assets.images.icons.SCANNER}
            style={{ height: 30, width: 30, tintColor: focused ? "blue" : "gray" }} />
        ),
      }}
    />
    <Tab.Screen
      name='History'
      component={HistoryScreen}
      options={{
                headerShown:false,

        title: "History",
        tabBarIcon: ({ focused }) => (
          <Image source={Assets.images.icons.HISTORY}
            style={{ height: 30, width: 30, tintColor: focused ? "blue" : "gray" }} 
             />
        ),
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray"

      }}
    />
  </Tab.Navigator>
);

const UserStack = () => (
  <Stack.Navigator initialRouteName="TabHome" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name='TabHome' component={TabNavigator} />
  </Stack.Navigator>
);

export default UserStack;