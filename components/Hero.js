import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const Hero = () => {
  return (
    <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
      <LinearGradient
        colors={["#449FE8", "#CC66FE", "#F9917C"]}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        style={styles.box}
      >
        <View style={styles.boxTop}>
          <Text style={styles.boxTopHeading}>Total Balance</Text>
          <Text style={styles.boxTopBalance}>$ 60000.00</Text>
        </View>
        <View style={styles.boxBottom}>
          <View style={styles.boxBottomItem}>
            <View style={styles.boxBottomIcon}>
              <Icon name="arrow-up" color="green" size={20} />
            </View>
            <View style={styles.boxBottomText}>
              <Text style={styles.boxBottomText.topText}>Income</Text>
              <Text style={styles.boxBottomText.bottomText}>$120000</Text>
            </View>
          </View>
          <View style={styles.boxBottomItem}>
            <View style={styles.boxBottomIcon}>
              <Icon name="arrow-down" color="red" size={20} />
            </View>
            <View style={styles.boxBottomText}>
              <Text style={styles.boxBottomText.topText}>Expense</Text>
              <Text style={styles.boxBottomText.bottomText}>$60000</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  box: {
    width: "90%",
    marginTop: 50,
    borderRadius: 15,
    height: 200,
  },
  boxTop: {
    display: "flex",
    alignItems: "center",
    marginTop: 30,
  },
  boxTopHeading: { fontSize: 18, color: "white" },
  boxTopBalance: { fontSize: 40, color: "white" },
  boxBottom: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  boxBottomItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  boxBottomIcon: {
    marginRight: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 35,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  boxBottomText: {
    topText: {
      color: "white",
      fontSize: 14,
    },
    bottomText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  },
  button: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
  },
});
