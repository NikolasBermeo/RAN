import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import Ecomercescreen from "./Ecomercescreen"; // Importa la nueva pantalla

const LoginStack = createStackNavigator();

function MyStack() {
  return (
    <LoginStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: '',
        }}
      />

      <LoginStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: '',
        }}
      />

      {/* Agrega la pantalla Ecomercescreen */}
      <LoginStack.Screen
        name="Ecomercescreen"
        component={Ecomercescreen}
        options={{
          title: '', // Puedes establecer un título aquí si lo deseas
        }}
      />
    </LoginStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
