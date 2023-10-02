import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const UserDetailScreen = () => {
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentLocation, setCurrentLocation] = useState(
    "Fetching location..."
  );
  const [address, setAddress] = useState("");
  const [idProof, setIdProof] = useState(null);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate fetching the current location
    setTimeout(() => {
      setCurrentLocation("Your Current Location");
    }, 1500);
  }, []);

  useEffect(() => {
    // Enable submit button only if all fields are filled
    if (
      gender &&
      firstName &&
      lastName &&
      currentLocation &&
      address &&
      idProof
    ) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [gender, firstName, lastName, currentLocation, address, idProof]);

  const handleSubmit = () => {
    // Simulate a loading delay (you can replace this with actual form submission logic)
    setTimeout(() => {
      // Show a success message
      Alert.alert("Success", "Profile created successfully!", [
        {
          text: "OK",
          onPress: () => {
            // Navigate to the home screen after successful submission
            navigation.navigate("Home");
          },
        },
      ]);

      // Reset the form fields
      setGender("");
      setFirstName("");
      setLastName("");
      setCurrentLocation("Fetching location...");
      setAddress("");
      setIdProof(null);
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Details</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender:</Text>
        <Picker
          style={styles.input}
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>

      <Text style={styles.locationText}>Current Location:</Text>
      <Text style={styles.location}>{currentLocation}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>

      <View style={styles.fileUploadContainer}>
        <Text style={styles.label}>ID Proof:</Text>
        <TouchableOpacity
          style={styles.fileUpload}
          onPress={() => {
            // Simulate selecting a file
            setIdProof("Selected ID Proof.pdf");
          }}
        >
          <Text style={styles.fileUploadText}>
            {idProof ? idProof : "Select ID Proof"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isSubmitDisabled ? "gray" : "green" },
        ]}
        onPress={handleSubmit}
        disabled={isSubmitDisabled}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  location: {
    fontSize: 16,
  },
  fileUploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  fileUpload: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  fileUploadText: {
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default UserDetailScreen;
