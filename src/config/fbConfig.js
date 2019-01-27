import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDO8tieZFRcn5Xbfh6CWetiykq6w5WH540",
    authDomain: "shopping-cb306.firebaseapp.com",
    databaseURL: "https://shopping-cb306.firebaseio.com",
    projectId: "shopping-cb306",
    storageBucket: "shopping-cb306.appspot.com",
    messagingSenderId: "235621042783"
};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;