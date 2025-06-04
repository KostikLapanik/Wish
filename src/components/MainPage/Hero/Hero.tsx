import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section className={styles.hero}>
        <h2>Исполняйте желания и получайте подарки</h2>
        <p>Добавляйте вещи, которые хотите получить, и делитесь своим списком с друзьями.</p>
        <button type="button">Начать</button>
    </section>
  )
}