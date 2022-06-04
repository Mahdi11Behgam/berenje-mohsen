import * as firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB49ccV29l1lQSdnqYI-rg8AttZEp93ws8",
    authDomain: "berenje-mohsen.firebaseapp.com",
    projectId: "berenje-mohsen",
    storageBucket: "berenje-mohsen.appspot.com",
    messagingSenderId: "916484794320",
    appId: "1:916484794320:web:e90fc77bc0cab45a203bd5",
    measurementId: "G-W4Z8YDB7B4"
};

//   Initialize Firebase
let app = null
if(!firebase.default.apps.length){
    app = firebase.default.initializeApp(firebaseConfig)
}

export const auth = firebase.default.auth();
export const db = firebase.default.firestore();
export const storage = firebase.default.storage();

export const storage_ref = storage.ref();
export const images_ref = storage_ref.child("images");

export const users_db = db.collection("users");
export const specific_user_ref = user_uid => users_db.doc(user_uid);




export default firebase;