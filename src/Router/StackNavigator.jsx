import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/Home'
import TodoDetails from "../pages/Todo-details"
import { Text } from "react-native";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return ( 
    //   <Stack.Navigator
        
    //     screenOptions={{
    //       headerTitle: "Home",
    //       headerShown: false,
    //       headerTitleAlign: "center",

    //       headerStyle: {
    //         backgroundColor: "#393E46",
    //       },
    //       headerTitleStyle: {
    //         fontWeight: "bold",
    //         fontSize: 24,
    //         color: "#00ADB5", // Set the text color
    //       },
    //     }}
    //   >
    //     <Stack.Screen name="Home" component={Home} options={{headerTitle: "Home" }} />
        
    //     <Stack.Screen
    //       name="Todo-details"
    //       component={TodoDetails}
    //       options={{ headerShown: true, headerTitle: "Todo Details" ,  tabBarVisible: false}}
    //     />


    <Stack.Navigator    screenOptions={{
             
              headerShown: false,
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#393E46",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 24,
                color: "#00ADB5", // Set the text color
              },
            }}>

<Stack.Screen name="Home" component={Home} screenOptions={{headerTitle: "Todo App" }} />


     <Stack.Screen
          name="Todo-details"
          component={TodoDetails}
          screenOptions={{ headerShown: true, headerTitle: "Todo Details" ,  tabBarVisible: false}}
        />
    </Stack.Navigator>
     
  );
};

export default StackNavigator;
