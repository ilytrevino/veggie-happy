import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBFCx7_Y96RPWJQ6yawbb4q_-v8TAuzmgQ",
  authDomain: "veggie-happy.firebaseapp.com",
  databaseURL: "https://veggie-happy.firebaseio.com",
  projectId: "veggie-happy",
  storageBucket: "veggie-happy.appspot.com",
  messagingSenderId: "122175234996",
  appId: "1:122175234996:web:e9915390afa480e9"
};

const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;
