import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDq2Q4cyGzyY6jWw9SnU1okKLwliSPUfY8",
    authDomain: "fashion-mart-sample.firebaseapp.com",
    projectId: "fashion-mart-sample",
    storageBucket: "fashion-mart-sample.appspot.com",
    messagingSenderId: "469241878116",
    appId: "1:469241878116:web:2d555eab2d9f295acf3171",
    measurementId: "G-WVN3QG10GQ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef,obj )
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollections = collections.docs.map(doc => {
        const {title, items} = doc.data()
        return {
            routeName : encodeURI(title.toLowerCase()),
            id : doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((acc,collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc
    }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;