import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCiQbah5ysxJ9QKTZlP6ZsPjkyOzw1G_u0",
  authDomain: "practice-auth.firebaseapp.com",
  databaseURL: "https://wineapp-aeb34.firebaseio.com/",
  projectId: "wineapp-aeb34",
  storageBucket: "",
  messagingSenderId: "",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();


