import { Wish } from '../../../Wish/Wish'

import styles from './PopularWishes.module.css';
import globalStyles from '../../../global.module.css'

export function PopularWishes() {
    return (
        <section>
            <h2 className={styles.title}>Популярные желания</h2>

            <section className={globalStyles.wishWrapper}>
                <Wish />
            </section>
        </section>
    )
}