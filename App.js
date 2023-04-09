import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={styles.drawerNavigator}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          initialRouteName="MealesCategories"
          screenOptions={styles.stackNavigator}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stackNavigator: {
    headerStyle: { backgroundColor: "#CC704B" },
    headerTintColor: "#FCFFE7",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
    },
    contentStyle: { backgroundColor: "#362706" }, // Background color of stack
  },
  drawerNavigator: {
    headerStyle: { backgroundColor: "#CC704B" },
    headerTintColor: "#FCFFE7",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
    },
    sceneContainerStyle: { backgroundColor: "#362706" }, // Alternative to contentStyle in drawer
    drawerContentStyle: { backgroundColor: "#362706" },
    drawerInactiveTintColor: "#FCFFE7",
    drawerActiveTintColor: "#CC704B",
    drawerActiveBackgroundColor: "#E4BAA1",
  },
});
