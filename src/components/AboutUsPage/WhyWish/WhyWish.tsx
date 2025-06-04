import styles from './WhyWish.module.scss'
import generalStyles from '../AboutUsPage.module.css'

export function WhyWish() {
    function boxOnMouseDown(e: React.MouseEvent<HTMLElement>) {
        const box = e.currentTarget;
        box.style.transform = 'scale(0.9)';
    }

    function boxOnMouseUp(e: React.MouseEvent<HTMLElement>) {
        const box = e.currentTarget;
        box.style.transform = 'scale(1.1)';

        setTimeout(() => {
            box.style.transform = 'scale(1)';
        }, 450)
    }

    return (
        <section className={styles.whyWish}>
            <h2 className={generalStyles.title}>Почему стоит использовать Wish</h2>

            <div className={styles.container}>
                <div onMouseDown={boxOnMouseDown} onMouseUp={boxOnMouseUp}>
                    <i className="fa-solid fa-circle-check"></i>
                    <h4>Избегайте ненужных подарков</h4>
                    <p>Получайте только то, что действительно хотите. Больше никаких бесполезных вещей,
                        которые будут пылиться на полке.</p>
                </div>

                <div onMouseDown={boxOnMouseDown} onMouseUp={boxOnMouseUp}>
                    <i className="fa-solid fa-gift"></i>
                    <h4>Экономьте время на выборе</h4>
                    <p>Не тратьте часы на раздумья - просто загляните в вишлист человека и выберите подарок,
                        который точно ему понравится.</p>
                </div>

                <div onMouseDown={boxOnMouseDown} onMouseUp={boxOnMouseUp}>
                    <i className="fa-solid fa-face-smile-wink"></i>
                    <h4>Дарите с уверенностью</h4>
                    <p>Будьте уверены, что ваш подарок придется по вкусу - ведь он был выбран
                        самим получателем.</p>
                </div>

                <div onMouseDown={boxOnMouseDown} onMouseUp={boxOnMouseUp}>
                    <i className="fa-solid fa-handshake"></i>
                    <h4>Упростите процесс для всех</h4>
                    <p>Больше не нужно гадать или намекать - просто добавьте желание в список
                        и поделитесь им.</p>
                </div>
            </div>
        </section>
    )
}