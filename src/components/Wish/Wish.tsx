import type { JSX } from 'react';
import { BasicWish } from './WishCardsTypes/BasicWish/BasicWish';
import { PresentWish } from './WishCardsTypes/PresentWish/PresentWish';
import { PersonalWish } from './WishCardsTypes/PersonalWish/PersonalWish';

export function Wish({ type }: { type: string }) {
    let wishCard: JSX.Element = <BasicWish />;

    switch (type) {
        case 'present':
            wishCard = <PresentWish />
            break;

        case 'personal_wish':
            wishCard = <PersonalWish />
            break;

        case 'basic':
            wishCard = <BasicWish />
            break;

        default:
            wishCard = <BasicWish />
            break;
    }


    console.log(wishCard);

    return (
        <>
            {wishCard || <BasicWish />}
        </>
    )
}