import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Signup({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.signUp}>Sign Up</Text>
        </View>

        <View style={styles.form}>
          <TextInput style={styles.inputField} placeholder="e-mail" />
          <TextInput style={styles.inputField} placeholder="Password" />
          <TextInput style={styles.inputField} placeholder="Confirm Password" />
          <Text style={styles.social}>SignUp with social Account</Text>
        </View>
        <View style={styles.logo}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 0.3,
  },
  signUp: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#4A90E2",
    marginTop: 80,
  },

  form: {
    flex: 0.6,
    marginTop: 60,
  },
  inputField: {
    width: 250,
    height: 50,
    borderWidth: 0.5,
    borderColor: "",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 30,
  },
  social: {
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    width: 250,
    height: 50,
    backgroundColor: "#4A90E2",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
