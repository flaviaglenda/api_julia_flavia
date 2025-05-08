import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaInicio from '../src/screens/inicio';
import TelaPerfil from '../src/screens/perfil';
import RealizarLogin from '../src/screens/login';
import RealizarCadastro from '../src/screens/cadastro';
import RealizarViagem from '../src/screens/route';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={RealizarLogin} />
        <Stack.Screen name="Início" component={TelaInicio} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
        <Stack.Screen name="Cadastro" component={RealizarCadastro} />
        <Stack.Screen name="Viagem" component={RealizarViagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
