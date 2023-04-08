import { FlatList, Text } from "react-native";

import CategoryGridTitle from "../components/CategoryGridTitle";

import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      key="categories"
    />
  );
}

export default CategoriesScreen;
