import { Wish } from "../../../Wish/Wish";

import globalStyles from '../../../global.module.css';
import styles from './Presents.module.scss';

export function Presents() {
    return (
        <section>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Подарки, которые вы заказали</h2>
                    <p>Желания, которые вы исполнили</p>
                </div>

                <div className={styles.stat}>
                    <p>Всего заказанно подарков: <span>7</span></p>
                    <p>Больше всего заказанно подарков: <span>Лере Базилевской</span></p>
                </div>
            </div>

            <div className={globalStyles.wishWrapper}>
                <Wish type="present" />
                <Wish type="present" />
                <Wish type="present" />
                <Wish type="present" />
                <Wish type="present" />
                <Wish type="present" />
                <Wish type="present" />
            </div>
        </section>
    )
}