import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

function IconButton({ icon, size, color, onPress }) {
  const [pressed, setPressed] = useState(false);

  function handlePress() {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 200); // Duration in milliseconds for which the pressed effect will be visible

    if (onPress) {
      onPress();
    }
  }

  return (
    <Pressable onPress={handlePress} style={pressed && styles.pressed}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
