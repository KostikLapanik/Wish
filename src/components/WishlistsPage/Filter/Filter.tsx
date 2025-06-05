import styles from './Filter.module.scss'

export function Filter() {
    return (
        <section className={styles.filter}>
            <form action="">
                <div className={styles.marketSelector}>
                    <label htmlFor="marketSelect" className={styles.title}>Select market</label>

                    <div className={styles.options}>
                        <div className={`${styles.option} ${styles.wb}`}>
                            <i className="fa-solid fa-w"></i>
                            <i className="fa-solid fa-b"></i>

                            <input
                                type="checkbox"
                                id="wb"
                                name="market"
                                value="wb"
                                title='wb'
                            />

                            <div className={styles.visual}></div>
                            <div className={styles.effect}></div>
                        </div>

                        <div className={`${styles.option} ${styles.ozon}`}>
                            <i className="fa-solid fa-o"></i>
                            <i className="fa-solid fa-z"></i>
                            <i className="fa-solid fa-o"></i>
                            <i className="fa-solid fa-n"></i>

                            <input
                                type="checkbox"
                                id="ozon"
                                name="market"
                                value="ozon"
                                title='ozon'
                            />

                            <div className={styles.visual}></div>
                            <div className={styles.effect}></div>
                        </div>

                        <div className={`${styles.option} ${styles.ym}`}>
                            <i className="fa-solid fa-y"></i>
                            <i className="fa-solid fa-m"></i>

                            <input
                                type="checkbox"
                                id="ym"
                                name="market"
                                value="ym"
                                title='ym'
                            />

                            <div className={styles.visual}></div>
                            <div className={styles.effect}></div>
                        </div>

                        <div className={`${styles.option} ${styles.aliexpress}`}>
                            <i className="fa-solid fa-a"></i>
                            <i className="fa-solid fa-l"></i>
                            <i className="fa-solid fa-i"></i>

                            <input
                                type="checkbox"
                                id="aliexpress"
                                name="market"
                                value="aliexpress"
                                title='aliexpress'
                            />

                            <div className={styles.visual}></div>
                            <div className={styles.effect}></div>
                        </div>
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