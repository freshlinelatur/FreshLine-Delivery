import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import BackButton from "../components/BackButton";
const HistoryScreen = () => {
  const [selectedInterval, setSelectedInterval] = useState("daily");

  // Dummy data for order history
  const orderHistory = [
    { id: "001", date: "2023-10-01", time: "10:00 AM", status: "Delivered" },
    { id: "002", date: "2023-10-02", time: "11:30 AM", status: "Pending" },
    { id: "003", date: "2023-10-01", time: "10:00 AM", status: "Delivered" },
    { id: "004", date: "2023-10-02", time: "11:30 AM", status: "Pending" },
    // Add more orders here
  ];

  const getTotalCompletedOrders = () => {
    // Calculate the total completed orders based on the selected interval
    // You can implement this based on your data source
    return orderHistory.filter((order) => order.status === "Delivered").length;
  };

  return (
    <View style={styles.container}>
      {/* Custom app header */}
      <View style={styles.customHeader}>
        <BackButton />
        <Text style={styles.headerText}>Order History</Text>
      </View>

      <View style={styles.content}>
        {/* Timeframe picker */}
        <Picker
          selectedValue={selectedInterval}
          onValueChange={(itemValue) => setSelectedInterval(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Yearly" value="yearly" />
        </Picker>

        {/* Order history */}
        <ScrollView style={styles.orderHistory}>
          {orderHistory.map((order) => (
            <View key={order.id} style={styles.orderItem}>
              <Text>{`Order ID: ${order.id}`}</Text>
              <Text>{`Date: ${order.date}`}</Text>
              <Text>{`Time: ${order.time}`}</Text>
              <Text>{`Status: ${order.status}`}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Total completed orders */}
        <View style={styles.totalOrders}>
          <Text>Total Completed Orders:</Text>
          <Text>{getTotalCompletedOrders()}</Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  customHeader: {
    // backgroundColor: "#007bff",
    // paddingVertical: 40,
    marginTop: 40,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    marginLeft: 20,
    fontSize: 20,
    color: "black",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  picker: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 16,
  },
  orderHistory: {
    flex: 1,
    marginBottom: 16,
  },
  orderItem: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  totalOrders: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 8,
  },
});
