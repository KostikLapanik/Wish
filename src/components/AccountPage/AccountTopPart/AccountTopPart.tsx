export function AccountTopPart() {
    return (
        <section>
            <div>
                <div>
                    <img src="" alt="" />
                    <button type="button">Изменить</button>
                </div>

                <h3>Никнейм</h3>
                <p>Email/Город</p>

                <div> ФИО
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div>Контакты</div>

                <div>Пункты выдачи</div>
            </div>

            <nav className="account-menu">
                <ul>
                    <li><button type="button">Друзья</button></li>
                    <li><button type="button" className="active">Мой вишлист</button></li>
                    <li><button type="button">Заказанные подарки</button></li>
                    <li><button type="button">Настройки</button></li>
                </ul>
            </nav>
        </section>
    )
}