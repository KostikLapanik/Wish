import styles from './Step.module.scss';

type Props = {
    number: number,
    title: string,
    text: string
}

export function Step({ number, title, text }: Props) {
    return (
        <div className={styles.step}>
            <div className={styles.stepNumber}>{number}</div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}