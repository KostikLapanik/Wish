import { useState, type JSX } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { AboutUsPage } from "./components/AboutUsPage/AboutUsPage";
import { WishlistsPage } from "./components/WishlistsPage/WishlistsPage";
import { AccountPage } from "./components/AccountPage/AccountPage";

export function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'aboutUs' | 'wishlists' | 'account'>('main');

  let page: JSX.Element;
  switch (currentPage) {
    case 'main':
      page = <MainPage />
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
      page = <MainPage />
      break;
  }

  return (
    <>
      <Header setPage={setCurrentPage} />
      {page || <MainPage />}
      <Footer />
    </>
  )
}
