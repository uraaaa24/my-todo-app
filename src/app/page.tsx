import { ToDoListTableProvider } from '@/provider/todoListTableProvider'
import { getAllTodo } from '@/utils/requester/get/todo'
import ToDoListTable from './_components/todoListTable'

/**
 * ホームページ
 */
const Home = async () => {
  const allTodo = await getAllTodo()

  return (
    <ToDoListTableProvider>
      <ToDoListTable todo={allTodo} />
    </ToDoListTableProvider>
  )
}

export default Home
