import { Hero } from "./Hero/Hero";
import { MainContainer } from "./MainContainer/MainContainer";

import './Main.module.css'

export function Main() {
    return (
        <main>
            <Hero />
            <MainContainer />
        </main>
    )
}