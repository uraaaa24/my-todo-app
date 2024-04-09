import { TODO_HEADER } from '@/constants/table'
import { useToDoListTableContext } from '@/context/todoListTableContext'
import { TodoTableRow } from '@/types/table'
import { TableBody, TableCell, TableRow } from '@mui/material'

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
          {/* TODO: 暫定的に先頭に completed を配置。本来はindexを先頭に配置する */}
          {isShowColumns[TODO_HEADER.completed] && <TableCell>{todo.completed ? '完了' : '未完了'}</TableCell>}
          {isShowColumns[TODO_HEADER.index] && <TableCell>{todo.index}</TableCell>}
          {isShowColumns[TODO_HEADER.title] && <TableCell>{todo.title}</TableCell>}
          {isShowColumns[TODO_HEADER.description] && <TableCell>{todo.description}</TableCell>}
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
