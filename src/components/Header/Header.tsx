import type { Dispatch, SetStateAction } from 'react'

import styles from './Header.module.scss'

type Props = {
  setPage: Dispatch<SetStateAction<string>>,
}

export function Header({ setPage }: Props) {
  return (
    <header>
      <h1 className={styles.title}>Wish</h1>

      <nav>
        <ul>
          <li><a href="#" className={styles.link} onClick={() => setPage('main')}>Главная</a></li>
          <li><a href="#" className={styles.link} onClick={() => setPage('aboutUs')}>О нас</a></li>
          <li><a href="#" className={styles.link} onClick={() => setPage('wishlists')}>Вишлисты</a></li>
          <li><a href="#" className={styles.link} onClick={() => setPage('account')}>Мой аккаунт</a></li>
        </ul>
      </nav>
    </header>
  )
}
