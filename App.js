import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Albums from "./screens/albums";
import { NavigationContainer } from "@react-navigation/native";
import Photo from "./screens/photo";

const Stack = createStackNavigator();

export default function App() {
  console.log("App Running");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="albums" component={Albums} />
        <Stack.Screen name="photo" component={Photo} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
