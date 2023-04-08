import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
//import { useRoute } from "@react-navigation/native";//Alternative to route prop

import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  //  const route = useRoute(); //Alternative to route prop
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

  function renderMealItem(itemData) {
    return <MealItem item={itemData.item} onPress={detailScreenHandler} />;
  }

  function detailScreenHandler(id) {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
