import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const otpInputRefs = useRef([]);

  useEffect(() => {
    if (otpInputRefs.current.length > 0) {
      otpInputRefs.current[0].focus();
    }
  }, []);

  const handleSendOtp = () => {
    if (isValidMobileNumber(mobileNumber)) {
      // You can implement OTP sending logic here
      // For simplicity, we'll just enable OTP input
      setIsOtpSent(true);
    }
  };

  const handleLogin = () => {
    if (isValidOtp(otp.join(""))) {
      // You can implement OTP verification logic here
      // If OTP is valid, navigate to the home screen
      navigation.navigate("UserDetail"); // Replace 'Home' with your actual home screen name
    }
  };

  const handleResendOTP = () => {
    // Implement resend OTP logic here
    // For now, let's just clear the OTP input fields
    setOtp(["", "", "", ""]);
    setIsOtpSent(false);
  };

  const isValidMobileNumber = (number) => {
    return /^\d{10}$/.test(number);
  };

  const isValidOtp = (otp) => {
    return /^\d{4}$/.test(otp);
  };

  const handleChangeOTP = (index, value) => {
    if (/^\d+$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otpInputRefs.current.length - 1) {
        otpInputRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logow.png")} style={styles.logo} />
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.mobileNumberContainer}>
        <Image source={require("../assets/flag.png")} style={styles.flagIcon} />
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.mobileNumberInput}
          placeholder="Enter your mobile number"
          placeholderTextColor="#ccc" // Placeholder text color
          keyboardType="numeric"
          maxLength={10}
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>
      {!isOtpSent ? (
        <TouchableOpacity
          style={
            isValidMobileNumber(mobileNumber)
              ? styles.button
              : styles.disabledButton
          }
          onPress={handleSendOtp}
          disabled={!isValidMobileNumber(mobileNumber)}
        >
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      ) : (
        <>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                placeholder="0"
                placeholderTextColor="#ccc" // Placeholder text color
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChangeOTP(index, text)}
                ref={(ref) => (otpInputRefs.current[index] = ref)}
              />
            ))}
          </View>
          <TouchableOpacity
            onPress={handleResendOTP}
            style={styles.resendContainer}
          >
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              isValidOtp(otp.join("")) ? styles.button : styles.disabledButton
            }
            onPress={handleLogin}
            disabled={!isValidOtp(otp.join(""))}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000", // Black background
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff", // White text
  },
  mobileNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
    color: "#fff", // White text
  },
  mobileNumberInput: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#fff", // White text
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  disabledButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  otpInput: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: "center",
    marginRight: 5,
    color: "#fff", // White text
  },
  resendContainer: {
    alignSelf: "flex-end",
    marginTop: -5,
    marginBottom: 10,
  },
  resendText: {
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default LoginScreen;
