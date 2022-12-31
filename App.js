import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./Signup";
import Products from "./Products";
import Settings from "./Settings";
import Firebase from "./Firebase";
import Chat from "./Chat";
import Menu from "./Menu";
import Graphql from "./Graphql";
import AdMob from "./AdMob";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Firebase" component={Firebase} />
        <Stack.Screen name="Graphql" component={Graphql} />
        <Stack.Screen name="AdMob" component={AdMob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
