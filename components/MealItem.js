import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function MealItem({ item }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}m</Text>
            <Text style={styles.detailItem}>
              {item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 10,
    borderRadius: 10,
    overflow: Platform.OS === "ios" ? "visible" : "hidden", // for ripple effect to work properly on Android devices
    backgroundColor: "#E8C07D",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  detailItem: {
    marginHorizontal: 10,
  },
});
