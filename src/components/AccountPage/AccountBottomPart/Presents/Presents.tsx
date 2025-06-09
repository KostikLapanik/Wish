import { Wish } from "../../../Wish/Wish";

import globalStyles from '../../../global.module.css'

export function Presents() {
  return (
    <section>
      <div>Подарки</div>

      <div className={globalStyles.wishWrapper}>
        <Wish />
        <Wish />
        <Wish />
        <Wish />
        <Wish />
        <Wish />
        <Wish />
      </div>
    </section>
  )
}