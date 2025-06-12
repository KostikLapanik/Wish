import { useState, type JSX } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { AboutUsPage } from "./components/AboutUsPage/AboutUsPage";
import { WishlistsPage } from "./components/WishlistsPage/WishlistsPage";
import { AccountPage } from "./components/AccountPage/AccountPage";
import type { pagesTypes } from "./types/index.ts";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './firebase/firebaseAuth.ts'

export function App() {
    const [currentPage, setCurrentPage] = useState<pagesTypes>('main');

    const auth = getAuth();

    onAuthStateChanged(auth, user => {
        if (!user) {
            // return <PrevPage />
        }
    })

    let page: JSX.Element;
    switch (currentPage) {
        case 'main':
            page = <MainPage setCurrentPage={setCurrentPage} />
            break;

        case 'aboutUs':
            page = <AboutUsPage />
            break;

        case 'wishlists':
            page = <WishlistsPage />
            break;

        case 'account':
            page = <AccountPage />
            break;

        default:
            page = <MainPage setCurrentPage={setCurrentPage} />
            break;
    }

    return (
        <>
            <Header setPage={setCurrentPage} />
            {page || <MainPage setCurrentPage={setCurrentPage} />}
            <Footer />
        </>
    )
}
