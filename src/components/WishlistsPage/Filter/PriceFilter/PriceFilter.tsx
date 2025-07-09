import { useState } from 'react';

import styles from './PriceFilter.module.scss';

export function PriceFilter() {
    const [price, setPrice] = useState('100');

    // const priceSpan: HTMLElement | null = document.querySelector('#priceSpan');

    // if (+price <= 400 && priceSpan) {
    //     priceSpan.style.color = 'black'
    // } else if (+price > 400 && priceSpan) {
    //     priceSpan.style.color = 'white'
    // }

    if (+price > 5000) {
        setPrice('5000');
    } else if (+price < 10) {
        setPrice('10');
    }

    return (
        <div className={styles.priceContainer}>
            <label htmlFor="price">Установите удобною для вас стоимость.</label>
            <span>От <em>10$</em>. До:</span>
            <input type="text" id="price" title="Price" placeholder="Price"
                onInput={(e) => setPrice(e.currentTarget.value)} value={price} min="10" max="5000" />

            <div className={styles.slider}>
                <div className={styles.slider__fill} style={{ width: `${Number(price) / 50}%` }}></div>

                <input type="range" id="price" min="10" max="5000" value={price} name="price"
                    title='price' onChange={(e) => setPrice(e.currentTarget.value)} />

                <span className={styles.price} id='priceSpan'>{price}$</span>
            </div>
        </div>
    )
}