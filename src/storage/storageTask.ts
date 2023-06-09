import { TaskDTO } from '../dtos/TaskDTO'
import { STORAGE_TASKS } from './storageConfig'

export function setStorageTasks (tasks: TaskDTO[]) {
  localStorage.setItem(STORAGE_TASKS, JSON.stringify(tasks))
}
