import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyD1V3iJIU9W7jt-TucXnndhp_SHODYs33Q",
  authDomain: "barber-4ab3c.firebaseapp.com",
  projectId: "barber-4ab3c",
  storageBucket: "barber-4ab3c.appspot.com",
  messagingSenderId: "66662207861",
  appId: "1:66662207861:web:cb66bc663066cdd0c2033c",
  measurementId: "G-M1422Q9JNF"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;