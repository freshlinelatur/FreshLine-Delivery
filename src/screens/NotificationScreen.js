import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // You can use any icon library you prefer

const NotificationScreen = ({ navigation }) => {
  const notifications = [
    {
      id: 1,
      text: "You have a new message from John Doe",
      icon: "message",
      color: "#FFA500", // You can choose your own color
    },
    {
      id: 2,
      text: "You've earned 100 reward points!",
      icon: "star",
      color: "#FFD700", // You can choose your own color
    },
    {
      id: 3,
      text: "Don't forget to complete your profile",
      icon: "account-circle",
      color: "#87CEEB", // You can choose your own color
    },
    {
      id: 4,
      text: "New product 'XYZ' is now available",
      icon: "shopping-cart",
      color: "#228B22", // You can choose your own color
    },
    {
      id: 5,
      text: "Your order has been shipped",
      icon: "local-shipping",
      color: "#00BFFF", // You can choose your own color
    },
    {
      id: 6,
      text: "Today's weather forecast: Sunny",
      icon: "wb-sunny",
      color: "#FFD700", // You can choose your own color
    },
    {
      id: 7,
      text: "You have a new message from Jane Doe",
      icon: "message",
      color: "#FFA500", // You can choose your own color
    },
    {
      id: 8,
      text: "Your appointment is tomorrow at 3 PM",
      icon: "access-time",
      color: "#FF69B4", // You can choose your own color
    },
    {
      id: 9,
      text: "Check out our latest promotions!",
      icon: "local-offer",
      color: "#FF4500", // You can choose your own color
    },
    {
      id: 10,
      text: "A new event is coming up near you",
      icon: "event",
      color: "#9932CC", // You can choose your own color
    },
    // ... (other notifications)
  ];

  const showNotificationDetails = (text) => {
    // You can navigate to a separate screen here instead of showing a console message
    console.log("Showing notification details: ", text);
  };

  const handleNotificationClick = (text) => {
    // Show an alert dialog with options to view details or cancel
    Alert.alert("Notification", text, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "View Details",
        onPress: () => showNotificationDetails(text),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <ScrollView style={styles.notificationList}>
        {notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            onPress={() => handleNotificationClick(notification.text)}
          >
            <View
              style={[
                styles.notificationItem,
                { borderColor: notification.color },
              ]}
            >
              <MaterialIcons
                name={notification.icon}
                size={24}
                color={notification.color}
              />
              <Text
                style={[styles.notificationText, { color: notification.color }]}
              >
                {notification.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingLeft: 16,
  },
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  notificationList: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 12,
  },
  notificationText: {
    fontSize: 16,
    marginLeft: 12,
  },
});

export default NotificationScreen;
