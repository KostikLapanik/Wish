import styles from './Market.module.scss'

export function Market({ marketSigh }: { marketSigh: string }) {
    const signArr = marketSigh.split('');

    return (
        <div className={`${styles.option} ${styles[marketSigh]}`}>
            {signArr.map((sigh: string) => {
                return <i className={`fa-solid fa-${sigh}`}></i>
            })}

            <input
                type="checkbox"
                id={marketSigh}
                name="market"
                value={marketSigh}
                title={marketSigh}
            />

            <div className={styles.visual}></div>
            <div className={styles.effect}></div>
        </div>
    )
}