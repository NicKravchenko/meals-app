import { View, Text, StyleSheet } from "react-native";

function FavouritesScreen() {
  return (
    <View style={styles.screen}>
      <Text>The Favourites Screen!</Text>
    </View>
  );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
