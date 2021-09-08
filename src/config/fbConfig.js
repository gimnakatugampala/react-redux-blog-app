import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCyI4Xi6ytFBSXyr_xErX2p6BorLY_mLoM",
  authDomain: "socialbook-287a9.firebaseapp.com",
  projectId: "socialbook-287a9",
  storageBucket: "socialbook-287a9.appspot.com",
  messagingSenderId: "224862278485",
  appId: "1:224862278485:web:7a89be4b45e0de2fdfd5dc"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 