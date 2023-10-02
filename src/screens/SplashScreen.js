import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000); // Navigate to Login screen after 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      {/* Replace the source with your logo image */}
      <Image
        source={require("../assets/logow.png")} // Replace with your image source
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FFD700",
    backgroundColor: "#3498db", // Background color for the splash screen
  },
  logo: {
    width: 200, // Adjust the width and height according to your logo dimensions
    height: 200,
  },
});

export default SplashScreen;
