import { Todo } from '@/types/model'
import { TableBody, TableCell, TableRow } from '@mui/material'

type ToDoListTableBodyProps = {
  todo: Todo[]
}

/**
 * ToDoリストを表示するテーブルのボディ
 */
const ToDoListTableBody = (props: ToDoListTableBodyProps) => {
  return (
    <TableBody>
      {props.todo.map((todo) => (
        <TableRow key={todo.id}>
          <TableCell>{todo.id}</TableCell>
          <TableCell>{todo.title}</TableCell>
          <TableCell>{todo.description}</TableCell>
          <TableCell>{todo.completed ? '完了' : '未完了'}</TableCell>
          <TableCell>{todo.dueDate.toString()}</TableCell>
          <TableCell>{todo.time}</TableCell>
          <TableCell>{todo.createdAt.toString()}</TableCell>
          <TableCell>{todo.updatedAt.toString()}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default ToDoListTableBody
