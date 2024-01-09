import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#152D35",
    backgroundColor: "#345B63",
  },
  text: {
    color: "#EDEDED",
    fontWeight: "500",
    textTransform: "none",
    textAlign: "center",
    fontSize: 16,
  },
});
