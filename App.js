import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { View } from "react-native";

//screens
import HomeScreen from "./screens/Home";
import AddExpenseScreen from "./screens/AddExpense";
import TransactionScreen from "./screens/Transaction";
import SigninScreen from "./screens/SigninScreen";
import LoadingScreen from "./screens/LoadinScreen";

const Tabs = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {loggedIn ? (
        <Tabs.Navigator
          labeled={false}
          screenOptions={{ tabBarVisible: false }}
        >
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
      ) : (
        <Stack.Navigator
          initialRouteName="loading,"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="signin" component={SigninScreen} />
          <Stack.Screen name="loading" component={LoadingScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
