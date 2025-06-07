import type { JSX } from "react";
import { Freinds } from "./Friends/Freinds";

type Props = {
    module: 'friends' | 'wishlist' | 'presents' | 'settings',
}

export function AccountBottomPart({ module }: Props) {
    let moduleElement: JSX.Element;

    switch (module) {
        case 'friends':
            moduleElement = <Freinds />
            break;

        case 'wishlist':
            moduleElement = 2
            break;

        case 'presents':
            moduleElement = 3
            break;

        case 'settings':
            moduleElement = 4
            break;

        default:
            moduleElement = 2
            break;
    }

    console.log(moduleElement)
    console.log(module)

    return (
        <section>
            {moduleElement}

            <section>
                <h2>Мой вишлист</h2>

                <div>Самый популярный маркетплэйс</div>
                <div>Желания
                    <button type="button">Получено</button>
                </div>

                <button type="button">Добавить желание</button>
            </section>

            <section>
                <h2>Заказанные подарки</h2>

                <div>Заказанные подарки</div>
            </section>

            <section>
                <h2>Настройки</h2>

                {/* Смотреть RentRide */}
            </section>
        </section>
    )
}