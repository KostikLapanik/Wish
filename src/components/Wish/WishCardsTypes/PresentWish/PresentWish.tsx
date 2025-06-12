import styles from '../../Wish.module.scss';

export function PresentWish() {
    return (
        <div className={`${styles.wishCard} ${styles.wishContent}`}>
            <div className={styles.userInfo}>
                <img src="null" alt="User avatar" />

                <div>
                    <h3 className={styles.userName}>Костя</h3>
                    <p className={styles.userLocation}>
                        <i className="fa-solid fa-location-dot"></i>
                        Минск
                    </p>
                </div>
            </div>

            <div>
                <h3 className={styles.wishTitle}>Name of wish</h3>

                <div className={styles.wishMeta}>
                    <span className={styles.marketplace}>
                        <i className="fas fa-shopping-bag"></i> Wildberries
                    </span>

                    <span className={styles.price}>199.99 BYN</span>
                </div>
            </div>
        </div>
    )
}