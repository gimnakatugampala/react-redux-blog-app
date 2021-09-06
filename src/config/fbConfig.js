import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCEK7qaAuqnqmSew9-j1iCEFnQyhuAHw9c",
  authDomain: "blognet2021.firebaseapp.com",
  projectId: "blognet2021",
  storageBucket: "blognet2021.appspot.com",
  messagingSenderId: "772581789075",
  appId: "1:772581789075:web:6d68798eea48a09d532c66"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 