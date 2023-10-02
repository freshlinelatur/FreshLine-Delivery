import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton"; // Import the BackButton component

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleUpdateProfile = () => {
    // Navigate to the "UpdateProfile" screen
    navigation.navigate("UpdateProfile");
  };

  const handleLogout = () => {
    // Navigate to the "Login" screen (or any other screen you want for logout)
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom app header */}
      <View style={styles.customHeader}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.profileInfo}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>John Doe</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>123 Main Street</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>New York, NY</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.updateProfileButton}
          onPress={handleUpdateProfile}
        >
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 25, // Add top padding to avoid overlapping with the default mobile header
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
  content: {
    flex: 1, // Take up all available vertical space
    justifyContent: "center", // Center the content vertically
  },
  profileInfo: {
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    flex: 2,
    fontSize: 16,
  },
  updateProfileButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
