// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb-ppODowLWWtTh5kzTZ9HSB_KXqEJZ9w",
  authDomain: "modamix-59364.firebaseapp.com",
  projectId: "modamix-59364",
  storageBucket: "modamix-59364.appspot.com",
  messagingSenderId: "915187933660",
  appId: "1:915187933660:web:7ad9f9d7e155140f7bef19",
};

initializeApp(firebaseConfig);
const db = getFirestore();

//add to the firebase database
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //users
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.category);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

//get the imgs to Carousel from the firebase database
export const getCategoriesAndDocumentsCarousel = async () => {
  const collectionRef = collection(db, "carousel");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title] = items;
    return acc;
  }, []);

  return categoryMap;
};


//get the products from the firebase database
export const getCategoriesAndDocumentsProducts = async () => {
  const collectionRef = collection(db, "products");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { category, items } = docSnapshot.data();
    acc[category] = items;
    return acc;
  }, []);

  return categoryMap;
};

//get the category products from the firebase database
export const getCategoriesAndDocumentsCategory = async () => {
  const collectionRef = collection(db, "category");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title] = items;
    return acc;
  }, []);

  return categoryMap;
};