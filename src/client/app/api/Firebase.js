import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCiQbah5ysxJ9QKTZlP6ZsPjkyOzw1G_u0",
  authDomain: "practice-auth.firebaseapp.com",
  databaseURL: "https://wineapp-aeb34.firebaseio.com/",
}





firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
