import { API_ALL_TODO } from '@/constants/api'
import { ToDoListTableProvider } from '@/provider/todoListTableProvider'
import { Todo } from '@/types/model'
import ToDoListTable from './_components/todoListTable'

async function getAllTodo() {
  const responses = await fetch(API_ALL_TODO, {
    cache: 'no-store'
  })

  const allTodo: Todo[] = await responses.json()

  return allTodo
}

export default async function Home() {
  const allTodo = await getAllTodo()

  return (
    <ToDoListTableProvider>
      <ToDoListTable todo={allTodo} />
    </ToDoListTableProvider>
  )
}
