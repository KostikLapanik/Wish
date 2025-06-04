import styles from './Wish.module.scss'

export function Wish() {
    return (
        <div className={styles.wish}>
            <img src="" alt="" />

            <div className={styles.info}>
                <h3>Беспроводные наушники</h3>
                <p>Наушники с хорошим звуком и шумоподавлением</p>

                <div className={styles.meta}>
                    <span>Wildberries</span>
                    <span>4,990 ₽</span>
                </div>

                <button type="button">Узнать больше</button>
            </div>
        </div>
    )
}