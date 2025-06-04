import { Step } from './Step/Step';
import { steps } from '../../../../data';

import styles from './HowItWorks.module.css';

export function HowItWorks() {
    return (
        <section>
            <h2>Как это работает?</h2>

            <section className={styles.steps}>
                {steps.map((step, i) => {
                    const stepNumber = i + 1;
                    return <Step number={stepNumber} title={step.title} text={step.text} />
                })}
            </section>
        </section>
    )
}