import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const Realizarcadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const tentarCadastrar = () => {
    if (email === '' || password === '') {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuário cadastrado com sucesso", userCredential.user);
        navigation.navigate('realizarViagem');
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error('Erro ao cadastrar:', error.message);
      });
  };

  const redirecionarLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground source={require('../assets/fundo_moov_cadastro.png')} style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/moov_azul.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={tentarCadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textCadastro}>
        <TouchableOpacity onPress={redirecionarLogin}>
          <Text style={styles.linkCadastro}>
            <Text style={styles.linkDestacado}>Já tem uma conta? Entrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: -50,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 20,
    width: 300,
    paddingLeft: 10,
    borderRadius: 8,
    zIndex: 10,
    shadowColor: "#c1c1c1",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.8,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 20,
    shadowColor: '#286286',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.8,
    borderColor: '#286286',
    borderWidth: 2,
  },
  buttonText: {
    color: '#286286',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textCadastro: {
    marginTop: 140,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#286286',
    width: '100%',
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#c1c1c1",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  linkCadastro: {
    marginTop: -40,
    fontSize: 16,
    color: '#000',
  },
  linkDestacado: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default Realizarcadastro;
