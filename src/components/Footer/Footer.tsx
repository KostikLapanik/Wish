import { FooterContent } from './FooterContent/footerContent'

import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer>
            <FooterContent />
            <section className={styles.bottomPart}>Wish - подари радость другим и получи свою порцию</section>
        </footer>
    )
}