import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

const Stack = createStackNavigator();

const screenOptions = {
  cardShadowEnabled: false,
  cardOverlayEnabled: false,
  headerTransparent: true,
  headerBackTitleVisible: false,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  header: ({ scene, previous, navigation }) => {
    const { options } = scene.descriptor;
    return <Header scene={scene} navigation={navigation} />;
  },
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="float" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
