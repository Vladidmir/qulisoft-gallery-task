import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { store } from "./store";

import UsersScreen from "./screens/UsersScreen";
import InfoScreen from "./screens/InfoScreen";

export type UserStackParamList = {
  Home: Record<string, unknown>;
  Full: { url: string };
};

const Stack = createNativeStackNavigator<UserStackParamList>();
export type NavigationProps = StackNavigationProp<UserStackParamList>;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={UsersScreen} />
          <Stack.Screen
            options={{
              presentation: "transparentModal",
            }}
            name="Full"
            component={InfoScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
