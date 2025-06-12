export interface firebaseConfigType {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
}

export type profileInfoType = {
    nickname?: string,
    photoURL?: string
}

export type pagesTypes = 'main' | 'aboutUs' | 'wishlists' | 'account';