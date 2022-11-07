import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import TransactionItem from "./TransactionItem";

const Transaction = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          width: "90%",
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Transaction
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Transaction")}>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: windowHeight,
          width: "90%",
          marginTop: 20,
          flex: 1,
        }}
        onScroll={(e) => console.log(e.nativeEvent.contentOffset.y)}
      >
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </ScrollView>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});
