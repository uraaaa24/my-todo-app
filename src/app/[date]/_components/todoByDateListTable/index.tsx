'use client'

import { Todo } from '@/types/model'
import { formatDateTime } from '@/utils'
import { Paper, Table, TableContainer } from '@mui/material'
import { useCallback } from 'react'
import TodoByDateListTableBody from './body'
import TodoByDateListTableFooter from './footer'
import TodoByDateListTableHeader from './header'

type TodoByDateListTableProps = {
  todo: Todo[]
}

/**
 * ToDoリストを表示するテーブルコンポーネント
 */
const TodoByDateListTable = (props: TodoByDateListTableProps) => {
  /** テーブルの行を生成する関数 */
  const generateTableRows = useCallback((todo: Todo, i: number) => {
    const index = i + 1
    return {
      id: todo.id,
      index: index,
      completed: todo.completed,
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate ? formatDateTime(new Date(todo.dueDate)) : '',
      time: todo.time,
      createdAt: formatDateTime(new Date(todo.createdAt)),
      updatedAt: formatDateTime(new Date(todo.updatedAt))
    }
  }, [])

  const totalToDoCount = props.todo.length
  const todoTableRows = props.todo.map(generateTableRows)

  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table>
          <TodoByDateListTableHeader />
          <TodoByDateListTableBody todo={todoTableRows} />
          <TodoByDateListTableFooter totalCount={totalToDoCount} />
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TodoByDateListTable
