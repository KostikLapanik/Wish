import { Hero } from "./Hero/Hero";
import { Container } from "./Container/Container";

import styles from './MainPage.module.css'

export function MainPage() {
    return (
        <main>
            <div className={styles.wrapper}>
                <Hero />
                <Container />
            </div>
        </main>
    )
}