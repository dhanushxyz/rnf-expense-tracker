import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TransactionSwitch from "../components/TransactionSwitch";
import Calender from "react-native-calendars/src/calendar";
import { format } from "date-fns";

const TransactionScreen = () => {
  const todayDate = format(new Date(), "yyyy-MM-dd");
  const [selectedDate, setSelectedDate] = useState(todayDate);
  return (
    <View style={styles.container}>
      <TransactionSwitch />
      <View
        style={{
          width: "90%",
          marginTop: 15,
        }}
      >
        <Calender
          style={{
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}
          horizontal={true}
          pagingEnabled={true}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          initialDate={selectedDate}
        />
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          height: 40,
          width: 50,
        }}
      >
        <Text
          style={{
            color: "red",
          }}
        >
          {selectedDate}
        </Text>
      </View>
    </View>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
