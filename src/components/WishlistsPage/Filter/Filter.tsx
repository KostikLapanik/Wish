import { markets } from '../../../data';

import styles from './Filter.module.scss'
import { Market } from './Market/Market';

export function Filter() {
    return (
        <section className={styles.filter}>
            <form action="">
                <div className={styles.marketSelector}>
                    <label htmlFor="marketSelect" className={styles.title}>Select market</label>

                    <div className={styles.options}>
                        {markets.map((market: string) => {
                            return <Market marketSigh={market}/>
                        })}
                    </div>
                </div>

                <label htmlFor="price"></label>
                <input type="number" id="price" title="Price" placeholder="Price" />

                <select name="country" id="" title="country"></select>

                <label htmlFor="ownerName"></label>
                <input type="text" id="ownerName" title="ownerName" />
            </form>
        </section>
    )
}