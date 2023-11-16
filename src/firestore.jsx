// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyHuS7bRgArNQAue_iofw8TuC-60jhsrI",
  authDomain: "myproject1020-338d0.firebaseapp.com",
  projectId: "myproject1020-338d0",
  storageBucket: "myproject1020-338d0.appspot.com",
  messagingSenderId: "295992079631",
  appId: "1:295992079631:web:41eed1fe6088d848373a7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

 