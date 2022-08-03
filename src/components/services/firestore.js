// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo39TF2xGsIaLK_0F_mRZra74UtHaGE48",
  authDomain: "e-commerce-mineo.firebaseapp.com",
  projectId: "e-commerce-mineo",
  storageBucket: "e-commerce-mineo.appspot.com",
  messagingSenderId: "359178355649",
  appId: "1:359178355649:web:7a7d9c8cfbdbc6d00ce540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app)

export async function getAllItems () {
  const itemsCollectionRef = collection (db, "jsonproducts");
  const docSnapshot = await getDocs (itemsCollectionRef);
  const dataItems = docSnapshot.docs.map ( item => {
    const items = {
      ...item.data (),
      id: item.id
    }
    return items
  })
  return (dataItems);
}


export async function getOneItem (id) {
  const itemsCollectionRef = collection (db, "jsonproducts");
  const docRef = doc(itemsCollectionRef, id)
  const oneDocSnapshot = await getDoc(docRef);
  return oneDocSnapshot.data()
}


export default db;