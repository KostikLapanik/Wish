import type { JSX } from "react";
import { Freinds } from "./Friends/Freinds";
import { Wishlist } from "./Wishlist/Wishlist";
import { Presents } from "./Presents/Presents";

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
            moduleElement = <Wishlist />
            break;

        case 'presents':
            moduleElement = <Presents />
            break;

        case 'settings':
            moduleElement = 4
            break;

        default:
            moduleElement = <Wishlist />
            break;
    }

    console.log(moduleElement)
    console.log(module)

    return (
        <section>
            {moduleElement}
            <section>
                <h2>Настройки</h2>

                {/* Смотреть RentRide */}
            </section>
        </section>
    )
}