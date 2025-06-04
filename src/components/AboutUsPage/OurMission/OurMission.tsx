import styles from './OurMission.module.scss'

export function OurMission() {
    return (
        <section className={styles.ourMission}>
            <h2>Наша миссия</h2>

            <div className={styles.container}>
                <div className={styles.content}>
                    <p>Wish создан, чтобы решить проблему неподходящих подарков.
                        Сколько раз вы получали вещи, которые вам не нужны?
                        Или дарили что-то, в чем не были уверены?</p>

                    <p>Этот проект разрабатывается мной самостоятельно как простое и
                        удобное решение для тех, кто хочет дарить и получать именно то, что нужно.</p>

                    <p>Моя цель - создать интуитивно понятный сервис без лишних сложностей,
                        который действительно поможет людям в выборе подарков.</p>
                </div>

                <i className="fa-solid fa-gifts"></i>
            </div>
        </section>
    )
}