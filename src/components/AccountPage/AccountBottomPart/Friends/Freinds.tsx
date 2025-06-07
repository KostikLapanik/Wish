import { Friend } from "./Friend/Friend";

import styles from './Friends.module.scss'

export function Freinds() {
  return (
    <>
      <div className={styles.title}>
        <h2>Найдите друзей</h2>
        <p>Добавляйте друзей, чтобы видеть их вишлисты и дарить подарки</p>
      </div>

      <div className={styles.container}>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </>
  )
}
