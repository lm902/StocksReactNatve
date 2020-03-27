import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Buy from "./src/components/buySell/Buy.js"
// import GetAPI from "./src/api/GetAPI.js";
// import Login from "./components/authentication/Login";
// import Register from "./components/authentication/Register";
// import Portfolio from './screens/Portfolio';
// import Detail from './screens/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Buy" component={Buy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
