import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const gradientColors = ["#449FE8", "#CC66FE", "#F9917C"];

const TransactionSwitch = () => {
  const [active, setActive] = useState("expense");

  const handleActiveState = (current) => {
    setActive(current);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            width: "45%",
          }}
          onPress={() => handleActiveState("income")}
        >
          <LinearGradient
            colors={
              active === "income"
                ? gradientColors
                : ["transparent", "transparent"]
            }
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 1,
              y: 1,
            }}
            style={{ ...styles.gradientBtn }}
          >
            <Text
              style={{
                fontSize: 18,
                color: active === "income" ? "#fff" : "#000",
              }}
            >
              Income
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "45%",
          }}
          onPress={() => handleActiveState("expense")}
        >
          <LinearGradient
            colors={
              active === "expense"
                ? gradientColors
                : ["transparent", "transparent"]
            }
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 1,
              y: 1,
            }}
            style={{ ...styles.gradientBtn }}
          >
            <Text
              style={{
                fontSize: 18,
                color: active === "expense" ? "#fff" : "#000",
              }}
            >
              Expense
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransactionSwitch;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 50,
    borderRadius: 15,
    height: 80,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 15,
  },
});
