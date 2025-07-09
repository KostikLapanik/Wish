import { useState, type Dispatch, type SetStateAction } from 'react';
import { markets } from '../../../data';
import { Market } from './Market/Market';
import { PriceFilter } from './PriceFilter/PriceFilter';

import styles from './Filter.module.scss'

type Props = {
    isFiltersOpen: boolean,
    setIsFiltersOpen: Dispatch<SetStateAction<boolean>>
}

export function Filter({ isFiltersOpen, setIsFiltersOpen }: Props) {
    const [country, setCountry] = useState('');

    const filtersSection = document.querySelector(`.${styles.filter}`);

    if (filtersSection) {
        if (isFiltersOpen) {
            filtersSection.classList.add(styles.filterOpen);
            filtersSection.classList.remove(styles.filterClosed);
        } else {
            filtersSection.classList.add(styles.filterClosed);
            filtersSection.classList.remove(styles.filterOpen);
        }
    }

    return (
        <>
            <button className={styles.filterBtn} type="button" onClick={() => setIsFiltersOpen(prev => !prev)}>
                <i className="fa-solid fa-filter"></i>
            </button>

            <section className={styles.filter}>
                <form action="">
                    <div className={styles.marketSelector}>
                        <label htmlFor="marketSelect" className={styles.title}>Select market</label>

                        <div className={styles.options}>
                            {markets.map((market: string, i: number) => {
                                return <Market marketSigh={market} key={i} />
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

                    <div className={styles.actions}>
                        <button type='submit'>Применить</button>

                        <button type='button' className={styles.closeBtn} onClick={() => setIsFiltersOpen(prev => !prev)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}