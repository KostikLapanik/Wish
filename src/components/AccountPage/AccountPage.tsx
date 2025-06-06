import { AccountBottomPart } from "./AccountBottomPart/AccountBottomPart";
import { AccountTopPart } from "./AccountTopPart/AccountTopPart";

import styles from './AccountPage.module.css'

export function AccountPage() {
    return (
        <main>
            <div className={styles.wrapper}>
                <AccountTopPart />
                <AccountBottomPart />
            </div>
        </main>
    )
}