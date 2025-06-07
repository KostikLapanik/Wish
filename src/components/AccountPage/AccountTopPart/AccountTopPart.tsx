import { DeliveryPoints } from './DeliveryPoints/DeliveryPoints';

import styles from './AccountTopPart.module.scss';

export function AccountTopPart() {
    return (
        <section className={styles.topSection}>
            <div className={styles.content}>
                <div className={styles.avatar}>
                    <div className={styles.avatarPicture}></div>
                    <button type="button">Изменить</button>
                </div>

                <div className={styles.userInfo}>
                    <h3>Konstantin</h3>
                    <p>lapanikkonstantin@gmail.com</p>
                </div>

                <div className={styles.socialContainer}>
                    <h3>Мои соцсети</h3>
                    <div className={styles.social}>
                        <a href="#"><i className="fa-brands fa-telegram"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-solid fa-plus"></i></a>
                    </div>
                </div>

                <section>
                    <h3>Мои пункты выдачи</h3>

                    <DeliveryPoints />
                </section>
            </div>

            <nav className={styles.menu}>
                <ul>
                    <li><button type="button" className={styles.menuBtn}>Друзья</button></li>
                    <li><button type="button" className={`${styles.menuBtn} ${styles.active}`}>Мой вишлист</button></li>
                    <li><button type="button" className={styles.menuBtn}>Заказанные подарки</button></li>
                    <li><button type="button" className={styles.menuBtn}>Настройки</button></li>
                </ul>
            </nav>
        </section>
    )
}