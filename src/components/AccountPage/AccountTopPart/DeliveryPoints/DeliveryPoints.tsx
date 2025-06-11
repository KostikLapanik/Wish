import { useRef } from 'react';

import styles from './DeliveryPoints.module.css';

export function DeliveryPoints() {
    const scrollRef = useRef(null);
    const scrollStep = 300;

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -scrollStep,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: scrollStep,
            behavior: 'smooth'
        });
    };

    return (
        <section className={styles.container}>
            <i className={`fa-solid fa-arrow-left ${styles.arrow} ${styles.leftArrow}`} onClick={scrollLeft}></i>

            <div className={styles.deliveryPoints} ref={scrollRef}>
                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>

                <div className={styles.deliveryPoint}>
                    <i className="fa-solid fa-map-pin"></i>
                    <p>Город, улица, дом</p>
                </div>
            </div>

            <i className={`fa-solid fa-arrow-right ${styles.arrow} ${styles.rightArrow}`} onClick={scrollRight}></i>
        </section>
    )
}