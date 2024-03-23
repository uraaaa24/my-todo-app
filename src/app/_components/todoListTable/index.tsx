import { Todo } from '@/types/model'
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import ToDoListTableHeader from './header'

type TodoListTableProps = {
  todo: Todo[]
}

/**
 * ToDoリストを表示するテーブルコンポーネント
 */
const ToDoListTable = (props: TodoListTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <ToDoListTableHeader />
        <TableBody>
          {props.todo.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.dueDate.toString()}</TableCell>
              <TableCell>{todo.completed ? '完了' : '未完了'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ToDoListTable
