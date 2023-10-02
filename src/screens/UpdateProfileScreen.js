import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Make sure you import the navigation hook from your navigation library.
import BackButton from "../components/BackButton"; // Import the BackButton component

const UpdateProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState(""); // State for storing the updated name
  const [email, setEmail] = useState(""); // State for storing the updated email

  const handleUpdate = () => {
    // Perform the update logic here (e.g., send a request to update the profile)
    // You can replace this with your actual update logic

    // Assuming the update was successful, navigate to the profile section
    if (name !== "" && email !== "") {
      // You can replace this with your navigation logic to go to the profile section
      navigation.navigate("ProfileScreen"); // Replace "ProfileScreen" with the name of your profile screen component
    } else {
      Alert.alert("Error", "Please fill in all fields before updating.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Custom app header */}
      <View style={styles.customHeader}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Update Profile</Text>
      </View>

      <Text style={styles.title}>Update Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  customHeader: {
    marginTop: 40,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    marginLeft: 20,
    fontSize: 20,
    color: "black",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
