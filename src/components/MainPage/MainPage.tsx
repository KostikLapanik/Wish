import { Hero } from "./Hero/Hero";
import { Container } from "./Container/Container";

import './MainPage.module.css'

export function MainPage() {
    return (
        <main>
            <Hero />
            <Container />
        </main>
    )
}