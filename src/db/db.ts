import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvcvSDMVfZ69MuY0SXBBPXMN1Wo1wip_k",
  authDomain: "portfolio-9ab51.firebaseapp.com",
  projectId: "portfolio-9ab51",
  storageBucket: "portfolio-9ab51.appspot.com",
  messagingSenderId: "607425615844",
  appId: "1:607425615844:web:ea9fbb69b4a30cf06359f1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
