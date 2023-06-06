import { PlusCircle } from '@phosphor-icons/react'

import { Header } from './components/Header'
import styles from './App.module.css'
import { Task } from './components/Task'

function App () {
  return (
    <div>
      <Header />
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
            <Task />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
