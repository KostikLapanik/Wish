import styles from './Wish.module.scss'

export function Wish() {
    return (
        <div className={styles.wishCard}>
            <div className={styles.wishImage}>
                <img src="/placeholder-wish.jpg" alt="Wish image" />
            </div>

            <div className={styles.wishContent}>
                <div className={styles.userInfo}>
                    <img src="/placeholder-avatar.jpg" alt="User avatar" />

                    <div>
                        <h3 className={styles.userName}>Костя</h3>
                        <p className={styles.userLocation}>Минск</p>
                    </div>
                </div>

                <div>
                    <h3 className={styles.wishTitle}>Name of wish</h3>
                    <p className={styles.wishDescription}>Description of the wish item that might be longer than one line and should be properly truncated</p>

                    <div className={styles.wishMeta}>
                        <span className={styles.marketplace}>
                            <i className="fas fa-shopping-bag"></i> Wildberries
                        </span>
                        
                        <span className={styles.price}>199.99 BYN</span>
                    </div>
                </div>

                <button className={styles.detailsButton} type="button">
                    Узнать больше
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}