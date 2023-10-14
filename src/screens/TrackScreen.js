import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TrackScreen = () => {
  const [orderStatus, setOrderStatus] = useState("Pending");
  const [distanceToRestaurant, setDistanceToRestaurant] = useState(0);
  const [distanceToUser, setDistanceToUser] = useState(0);

  // Simulate tracking the distance to the restaurant
  const trackToRestaurant = () => {
    setOrderStatus("Heading to Restaurant");
    // In a real app, you would use a location tracking library to update distances.
    // Here, we'll use setTimeout to simulate the updates.
    setTimeout(() => {
      setDistanceToRestaurant(2); // Distance in miles
    }, 2000); // Simulate a 2-second delay

    // Simulate arriving at the restaurant and waiting for pickup
    setTimeout(() => {
      setOrderStatus("Waiting at Restaurant");
    }, 5000); // Simulate a 5-second delay
  };

  // Simulate picking up the order and heading to the user
  const pickupOrder = () => {
    setOrderStatus("Picked Up Order");
    // In a real app, you would continue tracking location and updating distances.
    setTimeout(() => {
      setDistanceToUser(5); // Distance in miles
    }, 2000); // Simulate a 2-second delay
  };

  // Simulate completing the order and marking it as delivered
  const completeOrder = () => {
    setOrderStatus("Delivered");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Tracking</Text>
      <Text style={styles.status}>Order Status: {orderStatus}</Text>
      <Text style={styles.distance}>
        Distance to Restaurant: {distanceToRestaurant} miles
      </Text>
      <Text style={styles.distance}>
        Distance to User's Place: {distanceToUser} miles
      </Text>
      {orderStatus === "Pending" && (
        <Button title="Track to Restaurant" onPress={trackToRestaurant} />
      )}
      {orderStatus === "Waiting at Restaurant" && (
        <Button title="Pick Up Order" onPress={pickupOrder} />
      )}
      {orderStatus === "Picked Up Order" && (
        <Button title="Complete Order" onPress={completeOrder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    margin: 10,
  },
  distance: {
    fontSize: 16,
    margin: 10,
  },
});

export default TrackScreen;
