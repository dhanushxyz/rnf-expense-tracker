import React from "react";
import { View, SafeAreaView } from "react-native";
import HeroSection from "../components/Hero";
import TransactionSection from "../components/Transaction";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F3F4F6",
          flex: 1,
        }}
      >
        <HeroSection />
        <TransactionSection navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
