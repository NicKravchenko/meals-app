import { useLayoutEffect } from "react";
//import { useRoute } from "@react-navigation/native";//Alternative to route prop

import MealsList from "../components/MealsList/MealsList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute(); //Alternative to route prop
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

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
