import { Wish } from '../../Wish/Wish';

import styles from './Wishes.module.css';
import globalStyles from '../../global.module.css';

export function Wishes({ isFiltersOpen }: { isFiltersOpen: boolean }) {
    const wishes = document.querySelector(`.${styles.wishes}`);

    if (wishes) {
        if (isFiltersOpen) {
            wishes.classList.add(styles.wishesOpen);
        } else {
            wishes.classList.remove(styles.wishesOpen);
        }
    }

    return (
        <section
            className={`${globalStyles.wishWrapper} ${styles.wishes} ${isFiltersOpen ? styles.wishesOpen : ''}`}>
            <Wish type='basic' />
            <Wish type='basic' />
            <Wish type='basic' />
            <Wish type='basic' />
            <Wish type='basic' />
            <Wish type='basic' />
        </section>
    )
}