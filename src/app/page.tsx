import { API_TODO } from '@/constants/api'
import { ToDoListTableProvider } from '@/provider/todoListTableProvider'
import { Todo } from '@/types/model'
import ToDoListTable from './_components/todoListTable'

async function getAllTodo() {
  const responses = await fetch(API_TODO, {
    cache: 'no-store'
  })

  const allTodo: Todo[] = await responses.json()

  return allTodo
}

const Home = async () => {
  const allTodo = await getAllTodo()

  return (
    <ToDoListTableProvider>
      <ToDoListTable todo={allTodo} />
    </ToDoListTableProvider>
  )
}

export default Home
