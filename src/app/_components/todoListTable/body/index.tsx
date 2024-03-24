import { TODO_HEADER } from '@/constants/table'
import { useToDoListTableContext } from '@/context/todoListTableContext'
import { Todo } from '@/types/model'
import { TableBody, TableCell, TableRow } from '@mui/material'

type ToDoListTableBodyProps = {
  todo: Todo[]
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
          {isShowColumns[TODO_HEADER.status] && <TableCell>{todo.completed ? '完了' : '未完了'}</TableCell>}
          {isShowColumns[TODO_HEADER.dueDate] && <TableCell>{todo.dueDate.toLocaleString()}</TableCell>}
          {isShowColumns[TODO_HEADER.time] && <TableCell>{todo.time}</TableCell>}
          {isShowColumns[TODO_HEADER.createdAt] && <TableCell>{todo.createdAt.toLocaleString()}</TableCell>}
          {isShowColumns[TODO_HEADER.updatedAt] && <TableCell>{todo.updatedAt.toLocaleString()}</TableCell>}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default ToDoListTableBody
