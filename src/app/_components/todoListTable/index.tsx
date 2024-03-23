'use client'

import { ToDoListTableProvider } from '@/provider/todoListTableProvider'
import { Todo } from '@/types/model'
import { Paper, Table, TableContainer } from '@mui/material'
import ToDoListTableBody from './body'
import ToDoListTableFooter from './footer'
import ToDoListTableHeader from './header'

type TodoListTableProps = {
  todo: Todo[]
}

/**
 * ToDoリストを表示するテーブルコンポーネント
 */
const ToDoListTable = (props: TodoListTableProps) => {
  return (
    <ToDoListTableProvider>
      <Paper variant="outlined">
        <TableContainer>
          <Table>
            <ToDoListTableHeader />
            <ToDoListTableBody todo={props.todo} />
            <ToDoListTableFooter totalCount={props.todo.length} />
          </Table>
        </TableContainer>
      </Paper>
    </ToDoListTableProvider>
  )
}

export default ToDoListTable
