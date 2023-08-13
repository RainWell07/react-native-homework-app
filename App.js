import 'react-native-gesture-handler';
import React from "react";
import { View } from "react-native";
import styles from './Styles/Styles'
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

const App = () => (
    <NavigationContainer>
      <View style={styles.container}>
        <MainStack.Navigator initialRouteName="Registration">
          <MainStack.Screen name='Registration' component={RegistrationScreen} options={{headerShown: false}} />
          <MainStack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
        </MainStack.Navigator>
      </View>
    </NavigationContainer>
);

export default App;
