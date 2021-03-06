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

export const createUserProfileDoc = async (user, data = {}) => {
	const userRef = firestore.doc(`users/${user.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = user;
		const createdAt = new Date();

		try {
			await userRef.set({ displayName, email, createdAt, ...data });
		} catch (err) {
			console.error('error creating user', err);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();

	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollections = collections.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			title,
			items,
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
		};
	});

	return transformedCollections.reduce((acc, el) => {
		acc[el.title.toLowerCase()] = el;
		return acc;
	}, {});
};

export const convertDirectoriesSnapshotToArray = (directories) => {
	const transformedDirectories = directories.docs
		.map((doc) => {
			const { title, imageUrl, order } = doc.data();
			return {
				title,
				imageUrl,
				linkUrl: encodeURI(title.toLowerCase()),
				id: doc.id,
				order,
			};
		})
		.sort((a, b) => a.order - b.order);
	return transformedDirectories;
};

export const getCurrentUser = () => {
	return new Promise((res, rej) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			res(userAuth);
		}, rej);
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
