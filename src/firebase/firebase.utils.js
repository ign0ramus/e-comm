import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDt540idOV6WLvQxj4tI_bIQL4ptPA5Um8',
	authDomain: 'e-comm-a5ffc.firebaseapp.com',
	databaseURL: 'https://e-comm-a5ffc.firebaseio.com',
	projectId: 'e-comm-a5ffc',
	storageBucket: 'e-comm-a5ffc.appspot.com',
	messagingSenderId: '1021338654260',
	appId: '1:1021338654260:web:1d6d00c19342cfed8e9c61',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
