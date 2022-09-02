import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createContext } from "react";

firebase.initializeApp({
  apiKey: "AIzaSyCU4wdDKXxgUQWmbkl4X56mPbyKd4jpyQs",

  authDomain: "chat-react-151ae.firebaseapp.com",

  projectId: "chat-react-151ae",

  storageBucket: "chat-react-151ae.appspot.com",

  messagingSenderId: "509521502283",

  appId: "1:509521502283:web:95dd6cffb812c4c60eadce",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

type ContextType = {
  firebase: any;
  auth: any;
  firestore: any;
};

export const Context = createContext<ContextType>({
  firebase,
  auth,
  firestore,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Context.Provider
        value={{
          firebase,
          auth,
          firestore,
        }}
      >
        <Header />
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}

export default MyApp;
