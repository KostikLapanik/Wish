import styles from './Header.module.scss'

export function Header() {
  return (
    <header>
        <h1 className={styles.title}>Wish</h1>

        <nav>
            <ul>
                <li><a href="#" className={styles.link}>Главная</a></li>
                <li><a href="#" className={styles.link}>О нас</a></li>
                <li><a href="#" className={styles.link}>Вишлисты</a></li>
                <li><a href="#" className={styles.link}>Мой аккаунт</a></li>
            </ul>
        </nav>
    </header>
  )
}
