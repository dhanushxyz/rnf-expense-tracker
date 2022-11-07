import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { View } from "react-native";

//screens
import HomeScreen from "./screens/Home";
import AddExpenseScreen from "./screens/AddExpense";
import TransactionScreen from "./screens/Transaction";

const Tabs = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator labeled={false} screenOptions={{ tabBarVisible: false }}>
        <Tabs.Screen
          options={{
            labeled: false,
            tabBarIcon: ({ color = "#ffffff", size = 20 }) => (
              <Icon name="grid" color={color} size={size} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ color = "#ffffff", size = 20 }) => (
              <Icon name="plus" color={color} size={size} />
            ),
          }}
          name="AddExpense"
          component={AddExpenseScreen}
        />
        <Tabs.Screen
          options={{
            labeled: false,
            tabBarIcon: ({ color = "#ffffff", size = 20 }) => (
              <Icon name="calendar" color={color} size={size} />
            ),
          }}
          name="Transaction"
          component={TransactionScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
