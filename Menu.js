import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.buttonText}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Firebase")}
      >
        <Text style={styles.buttonText}>Firebase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Chat")}
      >
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Graphql")}
      >
        <Text style={styles.buttonText}>Graphql</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AdMob")}
      >
        <Text style={styles.buttonText}>AdMob</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#4A90E2",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
