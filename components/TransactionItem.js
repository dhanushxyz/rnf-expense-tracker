import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";

const transactions = [{
  
}]

const TransactionItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.itemLeft}>
        <LinearGradient
          colors={["#449FE8", "transparent"]}
          start={{
            x: 1,
            y: 0,
          }}
          end={{
            x: 0,
            y: 1,
          }}
          style={styles.gradientCircle}
        >
          <Icon name="shopping-cart" color="#fff" size={20} />
        </LinearGradient>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Shopping
        </Text>
      </View>
      <View style={styles.itemRight}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          $20
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#0AEEEF",
          }}
        >
          Today
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 80,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  itemLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  itemRight: {
    display: "flex",
    alignItems: "flex-end",
  },

  gradientCircle: {
    marginRight: 10,
    width: 45,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
