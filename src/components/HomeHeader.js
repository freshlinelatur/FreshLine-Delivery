import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const HomeHeader = ({ navigation }) => {
  const handleLocationPress = () => {
    // Handle location icon press
    // You can add code here to display the exact location
    console.log("Location fetching....");
  };

  const handleNotificationPress = () => {
    // Handle notification icon press
    // You can add code here to navigate to the notification screen or show notifications
    console.log("Redirecting to notification screen....");
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleLocationPress}>
        <View style={styles.locationContainer}>
          <Feather name="map-pin" size={24} color="black" />
          <Text style={styles.locationText}>Location fetching....</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNotificationPress}>
        <Feather name="bell" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#FFD700", // Yellow shaded background
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Add elevation for Android shadow
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16, // Round the location icon container
    padding: 8,
  },
  locationText: {
    fontSize: 14, // Smaller font size
    marginLeft: 8, // Add spacing between icon and text
  },
});

export default HomeHeader;
