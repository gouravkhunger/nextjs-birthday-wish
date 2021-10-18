import styles from '../styles/ErrorPopUp.module.css'
import { Button } from './Button'

export const ErrorPopUp = ({ hidden, toggleErrorPopup }) => {
  return (
    <div className={`${styles.container} ${hidden ? styles.hidden : styles.show}`}>
      <div className={styles.popup}>
        <p>Please enter a name!</p>
        <Button type="button" onClick={toggleErrorPopup} text="OKAY!"/>
      </div>
    </div>
  )
}
