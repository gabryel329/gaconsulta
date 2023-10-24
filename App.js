import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login/index';
import Lista from './src/Lista/index';
import Exame from './src/Lista/exames';
import Marcacao from './src/Lista/marcacao';
import Menu from './src/Menu/index';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Atendimentos" component={Lista} />
        <Stack.Screen name="Exames" component={Exame} />
        <Stack.Screen name="Marcacao" component={Marcacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
