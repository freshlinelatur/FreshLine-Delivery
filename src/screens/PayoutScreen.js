import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  // Picker,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import BackButton from "../components/BackButton";

const PayoutScreen = () => {
  const [selectedInterval, setSelectedInterval] = useState("daily");

  // Dummy data for payout history
  const payoutHistory = [
    { id: "001", status: "Completed", amount: 100 },
    { id: "002", status: "Pending", amount: 50 },
    { id: "003", status: "Completed", amount: 75 },
    { id: "004", status: "Pending", amount: 60 },
    // Add more payout entries here
  ];

  const getTotalAmountEarned = () => {
    // Calculate the total amount earned based on the selected interval
    // You can implement this based on your data source
    return payoutHistory.reduce((total, entry) => {
      if (entry.status === "Completed") {
        return total + entry.amount;
      }
      return total;
    }, 0);
  };

  const getTotalAmountGiven = () => {
    // Calculate the total amount given based on the selected interval
    // You can implement this based on your data source
    return payoutHistory.reduce((total, entry) => {
      if (entry.status === "Pending") {
        return total + entry.amount;
      }
      return total;
    }, 0);
  };

  return (
    <View style={styles.container}>
      {/* Custom app header */}
      <View style={styles.customHeader}>
        <BackButton />
        <Text style={styles.headerText}>Payout History</Text>
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

        {/* Payout history */}
        <ScrollView style={styles.payoutHistory}>
          {payoutHistory.map((entry) => (
            <View key={entry.id} style={styles.payoutItem}>
              <Text>{`Order ID: ${entry.id}`}</Text>
              <Text>{`Status: ${entry.status}`}</Text>
              <Text>{`Amount: $${entry.amount}`}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Total amount earned and given */}
        <View style={styles.totalAmount}>
          <Text>Total Amount Earned:</Text>
          <Text>${getTotalAmountEarned()}</Text>
        </View>
        <View style={styles.totalAmount}>
          <Text>Total Amount Given:</Text>
          <Text>${getTotalAmountGiven()}</Text>
        </View>
      </View>
    </View>
  );
};

export default PayoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
  payoutHistory: {
    flex: 1,
    marginBottom: 16,
  },
  payoutItem: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  totalAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 8,
  },
});
