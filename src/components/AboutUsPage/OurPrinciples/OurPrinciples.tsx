import styles from './OurPrinciples.module.scss'

export function OurPrinciples() {
    return (
        <section className={styles.ourPrinciples}>
            <h2>Наши принципы</h2>

            <div className={styles.container}>
                <div className={styles.principle}>
                    <i className="fa-solid fa-face-smile"></i>
                    <h4>Простота</h4>
                    <p>Интуитивно понятный интерфейс без лишних сложностей. Все, что нужно -
                        в несколько кликов.</p>
                </div>

                <div className={styles.principle}>
                    <i className="fa-solid fa-shield-halved"></i>
                    <h4>Конфиденциальность</h4>
                    <p>Вы контролируете, кто видит ваш список желаний. Ваши данные в безопасности.</p>
                </div>

                <div className={styles.principle}>
                    <i className="fa-solid fa-atom"></i>
                    <h4>Практичность</h4>
                    <p>Полезный функционал, который действительно решает проблему выбора подарков.</p>
                </div>

                <div className={styles.principle}>
                    <i className="fa-solid fa-handshake-simple"></i>
                    <h4>Доброта</h4>
                    <p>Мы верим, что хорошие подарки делают отношения между людьми теплее.</p>
                </div>
            </div>
        </section>
    )
}