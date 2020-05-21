import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from './pages/Cart';
import Home from './pages/Home';

const Stack = createStackNavigator();

const screenOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: '#7159c1',
  },
  headerTintColor: '#fff',
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          options={{ title: 'Home' }}
          component={Home}
        />
        <Stack.Screen
          name="Cart"
          options={{ title: 'Cart' }}
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
