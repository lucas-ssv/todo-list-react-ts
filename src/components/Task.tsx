import { useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import { Checkbox } from './Checkbox'
import styles from './Task.module.css'

type Props = {
  content: string
}

export function Task ({ content }: Props) {
  const [isCheckedTask, setIsCheckedTask] = useState<boolean>()

  function handleCheckTask () {
    setIsCheckedTask(isCheckedTask => !isCheckedTask)
  }

  return (
    <div className={styles.task}>
      <Checkbox onClick={handleCheckTask} isChecked={isCheckedTask} />
      <p>{content}</p>
      <button className={styles.deleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}
