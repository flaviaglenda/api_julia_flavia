import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import telaInicio from '../src/screens/inicio';
import telaPerfil from '../src/screens/perfil';
import realizarLogin from '../src/screens/login';
import realizarCadastro from '../src/screens/cadastro';
import realizarViagem from '../src/screens/route';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={realizarLogin} />
        <Stack.Screen name="Início" component={telaInicio} />
        <Stack.Screen name="Perfil" component={telaPerfil} />
        <Stack.Screen name="Cadastro" component={realizarCadastro} />
        <Stack.Screen name="Viagem" component={realizarViagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
