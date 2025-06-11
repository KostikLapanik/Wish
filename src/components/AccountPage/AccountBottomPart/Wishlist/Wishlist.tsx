import { Wish } from '../../../Wish/Wish';

import styles from './Wishlist.module.scss';
import globaStyles from '../../../global.module.css';

export function Wishlist() {
    return (
        <section className={styles.wishlist}>
            <div className={styles.title}>
                <h2>Мой вишлист</h2>

                <button className={styles.addWishBtn}>
                    <i className="fas fa-plus"></i> Добавить желание
                </button>
            </div>

            <div className={globaStyles.wishWrapper}>
                <Wish />
                <Wish />
                <Wish />
                <Wish />
                <Wish />
                <Wish />
                <Wish />
            </div>
        </section>
    )
}