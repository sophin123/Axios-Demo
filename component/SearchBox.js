import React from "react";
import { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SearchBox({ onPress, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter your id"
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.touchableOpacityStyle} onPress={onPress}>
        <Text style={{ color: "white" }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    width: 260,
    marginRight: 10,
    borderRadius: 8,
  },
  touchableOpacityStyle: {
    backgroundColor: "dodgerblue",
    padding: 15,
    borderRadius: 8,
  },
});
