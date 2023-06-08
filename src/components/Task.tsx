import { Trash } from '@phosphor-icons/react'
import { Checkbox } from './Checkbox'
import styles from './Task.module.css'

type Props = {
  content: string
  isChecked?: boolean
  onCheck: () => void
}

export function Task ({ content, isChecked = false, onCheck }: Props) {
  function handleCheckTask () {
    onCheck()
  }

  return (
    <div className={styles.task}>
      <Checkbox onClick={handleCheckTask} isChecked={isChecked} />
      <p className={isChecked ? styles.completedTask : ''}>{content}</p>
      <button className={styles.deleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}
