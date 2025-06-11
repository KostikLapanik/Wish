import { DeliveryPoints } from './DeliveryPoints/DeliveryPoints';
import type React from 'react';

import styles from './AccountTopPart.module.scss';

type Props = {
    setModule: React.Dispatch<React.SetStateAction<"friends" | "wishlist" | "presents" | "settings">>
}

export function AccountTopPart({ setModule }: Props) {
    function changeModule(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const allModuleButtons = Array.from(document.querySelectorAll(`.${styles.menuBtn}`));
        const currentButton: HTMLButtonElement = event.currentTarget;

        if (allModuleButtons) {
            allModuleButtons.forEach((button) => {
                if (button.classList.contains(styles.active) && button !== currentButton) {
                    button.classList.remove(styles.active);
                }
            })
        }

        currentButton.classList.add(styles.active);

        let moduleName: "friends" | "wishlist" | "presents" | "settings" = 'wishlist';

        switch (currentButton.name) {
            case 'friends':
                moduleName = 'friends'
                break;

            case 'wishlist':
                moduleName = 'wishlist'
                break;

            case 'presents':
                moduleName = 'presents'
                break;

            case 'settings':
                moduleName = 'settings'
                break;
            default:
                moduleName = 'wishlist'
                break;
        }

        setModule(moduleName);
    }

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
                    <li>
                        <button type="button"
                            className={styles.menuBtn}
                            name='friends'
                            onClick={(e) => changeModule(e)}>Друзья</button>
                    </li>

                    <li>
                        <button type="button"
                            className={`${styles.menuBtn} ${styles.active}`}
                            name='wishlist'
                            onClick={(e) => changeModule(e)}>Мой вишлист</button>
                    </li>

                    <li>
                        <button type="button"
                            className={styles.menuBtn}
                            name='presents'
                            onClick={(e) => changeModule(e)}>Заказанные подарки</button>
                    </li>

                    <li>
                        <button type="button"
                            className={styles.menuBtn}
                            name='settings'
                            onClick={(e) => changeModule(e)}>Настройки</button>
                    </li>
                </ul>
            </nav>
        </section>
    )
}