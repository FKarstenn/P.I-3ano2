import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDEtGsBjX02WqTncBkOSIfCpQ5uCKH0wxs",
    authDomain: "fut-firebase.firebaseapp.com",
    projectId: "fut-firebase",
    storageBucket: "fut-firebase.appspot.com",
    messagingSenderId: "76007684483",
    appId: "1:76007684483:web:c03d07cfe2e4ec8954deb6"
  };


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()

const PerfilCollection = db.collection('Perfil')

export{
    auth,db,PerfilCollection
}