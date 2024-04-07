import { TODO_HEADER, ToDoHeader } from '@/constants/table'
import { createContext, useContext } from 'react'

export const defaultToDoListTableIsShowColumns: { [key in ToDoHeader]: boolean } = {
  [TODO_HEADER.index]: true,
  [TODO_HEADER.title]: true,
  [TODO_HEADER.description]: false,
  [TODO_HEADER.completed]: true,
  [TODO_HEADER.dueDate]: true,
  [TODO_HEADER.time]: true,
  [TODO_HEADER.createdAt]: true,
  [TODO_HEADER.updatedAt]: true
}

export type ToDoListTableContext = {
  /** ヘッダーの表示/非表示 */
  isShowColumns: { [key in ToDoHeader]: boolean }
  /** ヘッダーの表示/非表示をセットする */
  setIsShowColumns: (column: ToDoHeader, isShow: boolean) => void

  /** 検索条件 */
  searchCondition?: string
  /** 検索条件をセットする */
  setSearchCondition: (condition: string) => void

  /** 1ページに表示するリストの数 */
  rowsPerPage: number
  /** 1ページに表示するリストの数をセットする */
  setRowsPerPage: (rowsPerPage: number) => void

  /** 現在のページ */
  currentPage: number
  /** 現在のページをセットする */
  setCurrentPage: (currentPage: number) => void
}

const initialToDoListTableContext: ToDoListTableContext = {
  isShowColumns: defaultToDoListTableIsShowColumns,
  setIsShowColumns: () => console.log('setIsShowColumns is not initialized'),

  searchCondition: '',
  setSearchCondition: () => console.log('setSearchCondition is not initialized'),

  rowsPerPage: 5,
  setRowsPerPage: () => console.log('setRowsPerPage is not initialized'),

  currentPage: 0,
  setCurrentPage: () => console.log('setCurrentPage is not initialized')
}

/**
 * ToDoリストテーブルで使用するContext
 */
export const ToDoListTableContext = createContext<ToDoListTableContext>(initialToDoListTableContext)

export const useToDoListTableContext = () => useContext(ToDoListTableContext)
