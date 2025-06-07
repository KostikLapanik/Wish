import styles from './Friend.module.scss'

export function Friend() {
    return (
        <div className={styles.friend}>
            <div className={styles.avatar}>
                <img src="" alt="User avatar" />
            </div>

            <div className={styles.userInfo}>
                <h3>Nickname</h3>

                <p className={styles.location}>
                    <i className="fas fa-map-marker-alt"></i> Минск, Беларусь
                </p>

                <div className={styles.social}>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-telegram"></i></a>
                    <a href="#"><i className="fab fa-vk"></i></a>
                </div>
            </div>

            <div className={styles.giftsStats}>
                <div className={styles.statItem}>
                    <i className={`fas fa-gift ${styles.sent}`}></i>
                    <span>Вы подарили: <strong>5</strong></span>
                </div>

                <div className={styles.statItem}>
                    <i className={`fas fa-gift ${styles.received}`}></i>
                    <span>Вам подарили: <strong>3</strong></span>
                </div>
            </div>
        </div>
    )
}