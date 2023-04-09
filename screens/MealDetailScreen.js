import { useContext, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealsList/MealDetails";
import List from "../components/Details/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const titleLength = 20;
  const screenTitle =
    selectedMeal.title.length > titleLength
      ? selectedMeal.title.slice(0, titleLength) + "..."
      : selectedMeal.title;

  function headerButtonPresseHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: screenTitle,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          size={24}
          color={mealIsFavorite ? "#ffa200" : "#fff"}
          onPress={headerButtonPresseHandler}
        />
      ),
    });
  }, [mealId, navigation, headerButtonPresseHandler]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.previewDetails}>
          <MealDetails
            item={selectedMeal}
            //   containerStyle={styles.previewDetails}
          />
        </View>
        <View style={styles.textContainer}>
          <List title={"Ingredients:"} items={selectedMeal.ingredients} />
          <List
            title={"Steps:"}
            items={selectedMeal.steps}
            isEnum={true}
            enumStyling={")"}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: "#E8C07D",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 300,
  },
  previewDetails: {
    borderColor: "#000",
    borderWidth: 4,
    borderRadius: 10,
    minWidth: "80%",
    marginTop: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  textContainer: {
    padding: 10,
  },
});
