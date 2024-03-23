'use client'

import { ToDoHeader } from '@/constants/table'
import { useToDoListTableContext } from '@/context/todoListTableContext'
import { Todo } from '@/types/model'
import { Box, Paper, Table, TableContainer } from '@mui/material'
import ViewColumnMenu from '../viewColumnMenu'
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
  const { isShowColumns, setIsShowColumns } = useToDoListTableContext()

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-between', mb: 2 }}>
        <ViewColumnMenu
          buttonLabel="表示項目"
          menuItems={Object.entries(isShowColumns).map(([key, isShow], i: number) => {
            const columnName = key as ToDoHeader
            return {
              key: columnName,
              label: columnName,
              isShow: isShow
            }
          })}
          onClickMenuItem={(item) => {
            setIsShowColumns(item.key, !item.isShow)
          }}
        />
      </Box>

      <Paper variant="outlined">
        <TableContainer>
          <Table>
            <ToDoListTableHeader />
            <ToDoListTableBody todo={props.todo} />
            <ToDoListTableFooter totalCount={props.todo.length} />
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}

export default ToDoListTable
