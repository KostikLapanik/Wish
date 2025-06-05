import { useState } from 'react';
import { markets } from '../../../data';
import { Market } from './Market/Market';
import { PriceFilter } from './PriceFilter/PriceFilter';

import styles from './Filter.module.scss'

export function Filter() {
    const [country, setCountry] = useState('');

    return (
        <section className={styles.filter}>
            <form action="">
                <div className={styles.marketSelector}>
                    <label htmlFor="marketSelect" className={styles.title}>Select market</label>

                    <div className={styles.options}>
                        {markets.map((market: string) => {
                            return <Market marketSigh={market} />
                        })}
                    </div>
                </div>

                <PriceFilter />

                <div className={styles.inputGroup}>
                    <label htmlFor="country">Введите страну получателя:</label>
                    <input type='text' name='country' title='country' id='country'
                        onChange={e => setCountry(e.currentTarget.value)} value={country} />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="ownerName">Введите имя получателя:</label>
                    <input type="text" id="ownerName" title="ownerName" />
                </div>

                <button type='submit'>Применить</button>
            </form>
        </section>
    )
}