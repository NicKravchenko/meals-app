import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/Details/List";

function MealDetailScreen({ route, navigation }) {
  mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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
