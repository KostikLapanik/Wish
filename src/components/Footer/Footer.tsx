import { FooterContent } from './FooterContent/FooterContent'

import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer>
            <FooterContent />
            <section className={styles.bottomPart}>Wish - подари радость другим и получи свою порцию</section>
        </footer>
    )
}