import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'
import Home from '../pages/Home'
import TodoDetails from "../pages/Todo-details"



import { Text } from "react-native";
import completedTask from "../pages/completedTask";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Router = () => {
  const includeScreen2 = false;

  return (
    <NavigationContainer>
      <Tab.Navigator
        
        screenOptions={{
          headerTitle: "Home",
          headerShown: true,
          headerTitleAlign: "center",

          headerStyle: {
            backgroundColor: "#393E46",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
            color: "#00ADB5", // Set the text color
          },
        }}
      >
        <Tab.Screen name="Main" component={StackNavigator} options={{headerTitle: "Todo App"}} />
        
        <Tab.Screen name="Completed" component={completedTask} options={{headerTitle: "Completed Tasks"}} />
  
      </Tab.Navigator>



    </NavigationContainer>
  );
};

export default Router;
