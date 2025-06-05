import { markets } from '../../../data';
import { Market } from './Market/Market';
import { PriceFilter } from './PriceFilter/PriceFilter';

import styles from './Filter.module.scss'

export function Filter() {
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

                <select name="country" id="" title="country"></select>

                <label htmlFor="ownerName"></label>
                <input type="text" id="ownerName" title="ownerName" />
            </form>
        </section>
    )
}