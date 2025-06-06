import { Wish } from '../../Wish/Wish';

import styles from './Wishes.module.css';

export function Wishes({ isFiltersOpen }: { isFiltersOpen: boolean }) {

    const wishes = document.querySelector(`.${styles.wishes}`);
    if (isFiltersOpen && wishes) {
        wishes.style.padding = '30px 30px 30px 414px'
    } else if (!isFiltersOpen && wishes) {
        wishes.style.padding = '30px'
    }

    return (
        <section className={styles.wishes}>
            <Wish />
            <Wish />
            <Wish />
            <Wish />
            <Wish />
            <Wish />
        </section>
    )
}