import { HowItWorks } from './HowItWorks/HowItWorks'
import styles from './MainContainer.module.css'
import { PopularWishes } from './PopularWishes/PopularWishes'

export function MainContainer() {
    return (
        <div className={styles.container}>
            <HowItWorks />
            <PopularWishes />
        </div>
    )
}