import { TODO_HEADER } from '@/constants/table'
import { useToDoListTableContext } from '@/context/todoListTableContext'
import { TableBody, TableCell, TableRow } from '@mui/material'

type TodoTableRow = {
  id: number
  title: string
  description?: string
  status: string
  dueDate?: string
  time: number
  createdAt: string
  updatedAt: string
}

type ToDoListTableBodyProps = {
  todo: TodoTableRow[]
}

/**
 * ToDoリストを表示するテーブルのボディ
 */
const ToDoListTableBody = (props: ToDoListTableBodyProps) => {
  const { isShowColumns } = useToDoListTableContext()

  return (
    <TableBody>
      {props.todo.map((todo) => (
        <TableRow key={todo.id} hover>
          {isShowColumns[TODO_HEADER.id] && <TableCell>{todo.id}</TableCell>}
          {isShowColumns[TODO_HEADER.title] && <TableCell>{todo.title}</TableCell>}
          {isShowColumns[TODO_HEADER.description] && <TableCell>{todo.description}</TableCell>}
          {isShowColumns[TODO_HEADER.status] && <TableCell>{todo.status}</TableCell>}
          {isShowColumns[TODO_HEADER.dueDate] && <TableCell>{todo.dueDate}</TableCell>}
          {isShowColumns[TODO_HEADER.time] && <TableCell>{todo.time}</TableCell>}
          {isShowColumns[TODO_HEADER.createdAt] && <TableCell>{todo.createdAt}</TableCell>}
          {isShowColumns[TODO_HEADER.updatedAt] && <TableCell>{todo.updatedAt}</TableCell>}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default ToDoListTableBody
