import { HowItWorks } from './HowItWorks/HowItWorks'
import styles from './MainContainer.module.css'

export function MainContainer() {
    return (
        <div className={styles.container}>
            <HowItWorks />
        </div>
    )
}