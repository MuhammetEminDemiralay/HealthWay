import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBEM9Id4m2hLsmRYyEnG1ynIfHUHZfaDEU",
    authDomain: "healthway-5e880.firebaseapp.com",
    projectId: "healthway-5e880",
    storageBucket: "healthway-5e880.appspot.com",
    messagingSenderId: "729381340976",
    appId: "1:729381340976:web:eb425cca8b8597ee006af5"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app