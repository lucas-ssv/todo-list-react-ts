import { PlusCircle, Circle, Trash } from '@phosphor-icons/react'

import Logo from './assets/logo.svg'
import styles from './App.module.css'

function App () {
  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt='Logo ToDo List' />
      </header>
      <main className={styles.content}>
        <form className={styles.form}>
          <input type='text' placeholder='Adicione uma nova tarefa' />
          <button type='submit'>
            Criar
            <PlusCircle />
          </button>
        </form>
        <div className={styles.tasksList}>
          <header className={styles.tasksListHeader}>
            <div className={styles.tasksInfo}>
              <strong className={styles.taskCreated}>Tarefas criadas</strong>
              <span>5</span>
            </div>
            <div className={styles.tasksInfo}>
              <strong className={styles.taskCompleted}>Concluídas</strong>
              <span>0 de 5</span>
            </div>
          </header>
          <section className={styles.tasksContainer}>
            <div className={styles.task}>
              <button className={styles.checkbox}>
                <Circle size={24} />
              </button>
              <p>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </p>
              <button className={styles.deleteTask}>
                <Trash size={24} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
