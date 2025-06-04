import { Wish } from './Wish/Wish'

import styles from './PopularWishes.module.scss'

export function PopularWishes() {
    return (
        <section>
            <h2 className={styles.title}>Популярные желания</h2>

            <section className={styles.wishes}>
                <Wish />
            </section>
        </section>
    )
}