import { firebaseAuth } from '../../../firebase/firebaseAuth';
import type { Dispatch, SetStateAction } from 'react';
import type { pagesTypes } from '../../../types';

import styles from './Hero.module.scss';

export function Hero({ setCurrentPage }: { setCurrentPage: Dispatch<SetStateAction<pagesTypes>> }) {
    function start() {
        const currentUser = firebaseAuth.getCurrentUser();

        if (!currentUser) {
            // setCurrentPage("login")
        } else {
            setCurrentPage("aboutUs")
        }
    }

    return (
        <section className={styles.hero}>
            <h2>Исполняйте желания и получайте подарки</h2>
            <p>Добавляйте вещи, которые хотите получить, и делитесь своим списком с друзьями.</p>
            <button type="button" onClick={start}>Начать</button>
        </section>
    )
}