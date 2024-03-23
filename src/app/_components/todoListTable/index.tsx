import { Todo } from '@/types/model'
import { Paper, Table, TableContainer } from '@mui/material'
import ToDoListTableBody from './body'
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
        <ToDoListTableBody todo={props.todo} />
      </Table>
    </TableContainer>
  )
}

export default ToDoListTable
