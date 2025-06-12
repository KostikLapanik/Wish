import type { firebaseConfigType } from "../types";

export const firebaseConfig: firebaseConfigType = {
    apiKey: import.meta.env.VITE_API_KEY || process.env.REACT_APP_API_KEY || "",
    authDomain: "wish-e8395.firebaseapp.com",
    projectId: "wish-e8395",
    storageBucket: "wish-e8395.appspot.com",
    messagingSenderId: "842114519961",
    appId: "1:842114519961:web:1a2b725de82e8670737908",
    measurementId: "G-TKRD9HF5JX"
};