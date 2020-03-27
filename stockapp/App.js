import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Buy from "./src/components/buySell/Buy.js";
// import GetAPI from "./src/api/GetAPI.js";
import Login from "./src/components/authenication/Login.js";
import Register from "./src/components/authenication/Register.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Buy" component={Buy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
