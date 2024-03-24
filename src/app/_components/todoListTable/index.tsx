'use client'

import { ToDoHeader } from '@/constants/table'
import { useToDoListTableContext } from '@/context/todoListTableContext'
import { Todo } from '@/types/model'
import { Box, Paper, Table, TableContainer } from '@mui/material'
import { useCallback } from 'react'
import SearchForm from '../searchForm'
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
  const { searchCondition, isShowColumns, setIsShowColumns, currentPage, rowsPerPage } = useToDoListTableContext()

  /** 検索条件からリストをフィルタリングする関数 */
  const applyFilter = useCallback((todo: Todo[], searchCondition: string | undefined) => {
    const filteredTodo = todo.filter((todo) => {
      return todo.title.includes(searchCondition ?? '')
    })
    return filteredTodo
  }, [])

  /** テーブルの行を生成する関数 */
  const generateTableRows = useCallback((todo: Todo, i: number) => {
    const index = i + 1 + currentPage * rowsPerPage
    return {
      id: index,
      title: todo.title,
      description: todo.description,
      status: todo.completed ? '完了' : '未完了',
      dueDate: todo.dueDate?.toLocaleString(),
      time: todo.time,
      createdAt: todo.createdAt.toLocaleString(),
      updatedAt: todo.updatedAt.toLocaleString()
    }
  }, [])

  const filteredTodo = applyFilter(props.todo, searchCondition)
  const totalToDoCount = filteredTodo.length
  const startIndex = currentPage * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const todoTableRows = filteredTodo.slice(startIndex, endIndex).map(generateTableRows)

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-between', mb: 2 }}>
        <Box flex={1}>
          <Box width="40%">
            <SearchForm />
          </Box>
        </Box>
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
            <ToDoListTableBody todo={todoTableRows} />
            <ToDoListTableFooter totalCount={totalToDoCount} />
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}

export default ToDoListTable
