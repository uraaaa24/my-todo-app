'use client'

import { ToDoListTableContext } from '@/context/todoListTableContext'
import {
  ToDoListTableReducer,
  ToDoListTableReducerState,
  initialToDoListTableReducerState
} from '@/reducer/todoListTableReducer'
import { useCallback, useReducer } from 'react'

type ToDoListTableProviderProps = {
  defaultState?: ToDoListTableReducerState
  children: React.ReactNode
}

/**
 * ToDoリストテーブルで使用するProvider
 */
export const ToDoListTableProvider = (props: ToDoListTableProviderProps) => {
  const [state, dispatch] = useReducer(ToDoListTableReducer, props.defaultState ?? initialToDoListTableReducerState)

  const contextValue: ToDoListTableContext = {
    isShowColumns: state.isShowColumn,
    setIsShowColumns: useCallback(
      (column, isShow) => dispatch({ type: 'SET_IS_SHOW_COLUMN', payLoad: { column, isShow } }),
      [dispatch]
    ),
    searchCondition: state.searchCondition,
    setSearchCondition: useCallback(
      (condition) => dispatch({ type: 'SET_SEARCH_CONDITION', payLoad: { searchCondition: condition } }),
      [dispatch]
    ),
    rowsPerPage: state.rowsPerPage,
    setRowsPerPage: useCallback((rowsPerPage) => dispatch({ type: 'SET_ROWS_PER_PAGE', payLoad: { rowsPerPage } }), [dispatch]),
    currentPage: state.currentPage,
    setCurrentPage: useCallback((currentPage) => dispatch({ type: 'SET_CURRENT_PAGE', payLoad: { currentPage } }), [dispatch])
  }

  return <ToDoListTableContext.Provider value={contextValue}>{props.children}</ToDoListTableContext.Provider>
}
