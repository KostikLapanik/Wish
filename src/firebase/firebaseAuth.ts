import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile, type User } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import type { profileInfoType } from "../types";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class FirebaseAuth {
    async sighUpWithEmailAndPassword(email: string, password: string) {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    }

    async signInWithEmailAndPassword(email: string, password: string) {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    }

    getCurrentUser() {
        return auth.currentUser;
    }

    async updateUserProfile(user: User, profileInfo: profileInfoType) {
        await updateProfile(user, profileInfo);
    }

    async logoutUser() {
        await signOut(auth)
    }
}

export const firebaseAuth = new FirebaseAuth();