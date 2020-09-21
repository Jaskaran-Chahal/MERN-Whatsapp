import firebase, { firestore } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOcXVL0peGZMJ3JPxwyDbrZLfdD4hztaU",
    authDomain: "whatsapp-mern-4a673.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-4a673.firebaseio.com",
    projectId: "whatsapp-mern-4a673",
    storageBucket: "whatsapp-mern-4a673.appspot.com",
    messagingSenderId: "583201472857",
    appId: "1:583201472857:web:7c275fe7f562abe1b34c48"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;