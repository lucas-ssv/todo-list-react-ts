import { ChangeEvent, FormEvent, useMemo, useState } from 'react'
import { ClipboardText, PlusCircle } from '@phosphor-icons/react'

import { Header } from './components/Header'
import { Task } from './components/Task'
import styles from './App.module.css'

function App () {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')
  const sizeTasks = useMemo(() => tasks.length, [tasks])

  function handleAddNewTask (event: FormEvent) {
    event.preventDefault()
    if (newTask.trim().length > 0) {
      setTasks(oldTasks => [...oldTasks, newTask])
      setNewTask('')
    }
  }

  function onTaskChange (event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return (
    <div>
      <Header />
      <main className={styles.content}>
        <form onSubmit={handleAddNewTask} className={styles.form}>
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'
            onChange={onTaskChange}
            value={newTask}
          />
          <button type='submit'>
            Criar
            <PlusCircle />
          </button>
        </form>
        <div className={styles.tasksList}>
          <header className={styles.tasksListHeader}>
            <div className={styles.tasksInfo}>
              <strong className={styles.taskCreated}>Tarefas criadas</strong>
              <span>{sizeTasks}</span>
            </div>
            <div className={styles.tasksInfo}>
              <strong className={styles.taskCompleted}>Concluídas</strong>
              <span>0 de 5</span>
            </div>
          </header>
          <section className={styles.tasksContainer}>
            {tasks.length === 0 && (
              <div className={styles.tasksEmpty}>
                <hr />
                <div className={styles.tasksEmptyInfo}>
                  <ClipboardText size={56} />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            )}
            {tasks.map(task => (
              <Task key={task} content={task} />
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
