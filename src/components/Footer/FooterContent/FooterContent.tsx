import styles from './FooterContent.module.scss'

export function FooterContent() {
  return (
    <section className={styles.content}>
      <div className={styles.column}>
        <h3>Wish</h3>
        <p>Сервис для создания вишлистов и исполнения желаний.</p>
      </div>

      <div className={styles.column}>
        <h3>Ссылки</h3>

        <ul className={styles.contacts}>
          <li>Главная</li>
          <li>Вишлисты</li>
          <li>О нас</li>
          <li>Аккаунт</li>
        </ul>
      </div>

      <div className={styles.column}>
        <h3>Контакты</h3>
        <p>Email: info@wish.com</p>

        <div className={styles.social}>
          <a href="https://t.me/ostkki" target='blank'><i className="fa-brands fa-telegram"></i></a>
          <a href="https://www.linkedin.com/in/konstantin-lapanik-715413357/" target='blank'><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/KostikLapanik/Wish/" target='blank'><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </section>
  )
}
