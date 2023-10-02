import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import HomeHeader from "../components/HomeHeader";

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderLocation: "123 Main St",
      restaurantLocation: "456 Elm St",
      distance: "2.3 km",
      status: "pending",
    },
    {
      id: 2,
      orderLocation: "789 Oak St",
      restaurantLocation: "101 Pine St",
      distance: "1.5 km",
      status: "pending",
    },
    // Add more orders as needed
  ]);

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  const handleAcceptOrder = (orderId) => {
    // Handle order acceptance here
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: "accepted" };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleRejectOrder = (orderId) => {
    // Handle order rejection here
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: "rejected" };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleTrackOrder = () => {
    // Handle tracking the order here
    // You can navigate to the tracking screen
  };

  const renderOrderItem = ({ item }) => (
    <View
      style={[
        styles.orderItem,
        item.status === "accepted" ? styles.acceptedOrder : null,
      ]}
    >
      <Text style={styles.orderId}>Order #{item.id}</Text>
      <View>
        <Text>Order Location: {item.orderLocation}</Text>
        <Text>Restaurant Location: {item.restaurantLocation}</Text>
        <Text>Distance: {item.distance}</Text>
      </View>
      {item.status === "pending" && (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.acceptButton]}
            onPress={() => handleAcceptOrder(item.id)}
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.rejectButton]}
            onPress={() => handleRejectOrder(item.id)}
          >
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      )}
      {item.status === "accepted" && (
        <TouchableOpacity
          style={[styles.actionButton, styles.trackButton]}
          onPress={handleTrackOrder}
        >
          <Text style={styles.buttonText}>Track</Text>
        </TouchableOpacity>
      )}
      {item.status === "rejected" && (
        <Text style={styles.rejectedText}>Ohh, you rejected this order</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.content}>
        <TouchableOpacity
          style={[
            styles.onlineButton,
            isOnline ? styles.onlineActive : styles.offlineActive,
          ]}
          onPress={toggleOnlineStatus}
        >
          <Text style={styles.buttonText}>
            {isOnline ? "Online" : "Go Online"}
          </Text>
        </TouchableOpacity>
        {!isOnline ? (
          <Text style={styles.offlineMessage}>
            Ummm, you are not online. Come online, your orders are waiting!
          </Text>
        ) : (
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderOrderItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  onlineButton: {
    backgroundColor: "#3498db",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
  onlineActive: {
    backgroundColor: "#2ecc71",
  },
  offlineActive: {
    backgroundColor: "#e74c3c",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  offlineMessage: {
    color: "#e74c3c",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  orderItem: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  acceptedOrder: {
    backgroundColor: "#2ecc71", // Green background for accepted orders
  },
  orderId: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  actionButton: {
    padding: 8,
    borderRadius: 4,
    alignItems: "center",
    width: 80,
  },
  acceptButton: {
    backgroundColor: "#2ecc71",
  },
  rejectButton: {
    backgroundColor: "#e74c3c",
  },
  trackButton: {
    backgroundColor: "#FFD700", // Yellow shaded background for track button
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 12,
    marginTop: 10,
    borderRadius: 0, // Remove borderRadius
    width: "100%", // Take the entire width of the order section
    borderRadius: 8,
  },
  rejectedText: {
    color: "#e74c3c",
    fontSize: 20,
    textAlign: "center",
    marginTop: 8,
  },
});

export default HomeScreen;
