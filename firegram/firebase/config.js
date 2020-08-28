import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBFBu5JCiBYiDNhLKVAjMU2D3Da1LGB8Kc",
  authDomain: "novi-projekat-1522510766363.firebaseapp.com",
  databaseURL: "https://novi-projekat-1522510766363.firebaseio.com",
  projectId: "novi-projekat-1522510766363",
  storageBucket: "novi-projekat-1522510766363.appspot.com",
  messagingSenderId: "98832860244",
  appId: "1:98832860244:web:0803b2f28f64f3a3a1d9c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };