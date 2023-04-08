import { Text, StyleSheet } from "react-native";

function List({ title, items, isEnum, enumStyling }) {
  function calcIndex(ind) {
    return ind + 1 + enumStyling;
  }

  return (
    <>
      <Text style={styles.subtitle}>{title}</Text>
      {items.map((item, ind) => (
        <Text style={styles.text} key={item}>
          {isEnum ? calcIndex(ind) : "-"} {item}
        </Text>
      ))}
    </>
  );
}

export default List;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginLeft: 5,
  },
});
