import { HowItWorks } from './HowItWorks/HowItWorks'
import { PopularWishes } from './PopularWishes/PopularWishes'

import styles from './Container.module.css'

export function Container() {
    return (
        <div className={styles.container}>
            <HowItWorks />
            <PopularWishes />
        </div>
    )
}