import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Import the Expo Icons library

const BackButton = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleBackPress} style={styles.container}>
      {/* Use the Ionicons component for the back icon */}
      <Ionicons name="ios-arrow-back" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
