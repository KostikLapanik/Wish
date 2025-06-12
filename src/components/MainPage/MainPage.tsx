import { Hero } from "./Hero/Hero";
import { Container } from "./Container/Container";
import type { Dispatch, SetStateAction } from "react";
import type { pagesTypes } from "../../types";

import styles from './MainPage.module.css'

type Props = {
    setCurrentPage: Dispatch<SetStateAction<pagesTypes>>
}

export function MainPage({ setCurrentPage }: Props) {
    return (
        <main>
            <div className={styles.wrapper}>
                <Hero setCurrentPage={setCurrentPage} />
                <Container />
            </div>
        </main>
    )
}