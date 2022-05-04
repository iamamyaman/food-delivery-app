import {getApp,getApps,initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore, initializeFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAi0-qkazLU0QtxFlPyEp2ccdXbToyp-BI",
    authDomain: "food-delivery-app-63ff6.firebaseapp.com",
    databaseURL: "https://food-delivery-app-63ff6-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-63ff6",
    storageBucket: "food-delivery-app-63ff6.appspot.com",
    messagingSenderId: "789873969581",
    appId: "1:789873969581:web:7acb2bb29002eb9a1ef924"
  };

const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {app,firestore,storage};