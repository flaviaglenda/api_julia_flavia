// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Importando getAuth para usar autenticação
import AsyncStorage from '@react-native-async-storage/async-storage';  // Importando AsyncStorage para persistência

const firebaseConfig = {
  apiKey: "AIzaSyB0PzGKlVO5GYLVLJBzGz7SDMvmUx3R7YM",
  authDomain: "app-moov.firebaseapp.com",
  projectId: "app-moov",
  storageBucket: "app-moov.appspot.com",
  messagingSenderId: "1089950749936",
  appId: "1:1089950749936:web:0acdf29ddfc783497b9e35",
  measurementId: "G-TRE1G69KM3"
};

// Inicializando o Firebase com a configuração
const app = initializeApp(firebaseConfig);

// Inicializando o Firebase Auth
const auth = getAuth(app);

export { app, auth };
