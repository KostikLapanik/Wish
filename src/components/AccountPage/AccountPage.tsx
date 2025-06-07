import { AccountBottomPart } from "./AccountBottomPart/AccountBottomPart";
import { AccountTopPart } from "./AccountTopPart/AccountTopPart";
import { useState } from "react";

import styles from './AccountPage.module.css'

export function AccountPage() {
    const [accountModule, setAccountModule] = useState<'friends' | 'wishlist' | 'presents' | 'settings'>('wishlist');

    return (
        <main>
            <div className={styles.wrapper}>
                <AccountTopPart setModule={setAccountModule} />
                <AccountBottomPart module={accountModule} />
            </div>
        </main>
    )
}