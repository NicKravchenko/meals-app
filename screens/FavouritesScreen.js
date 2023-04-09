import { useContext } from "react";

import { View, Text, StyleSheet } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

function FavouritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  return <MealsList items={favMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
