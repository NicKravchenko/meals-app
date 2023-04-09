import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealItem from "./MealItem";

function MealsList({ items }) {
  const navigation = useNavigation();
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
