import { DEFAULT_CURRENT_PAGE, DEFAULT_ROWS_PER_PAGE } from '@/constants/table'
import { ToDoListTableContext, defaultToDoListTableIsShowColumns } from '@/context/todoListTableContext'

export type ToDoListTableReducerState = {
  isShowColumn: ToDoListTableContext['isShowColumns']
  searchCondition?: ToDoListTableContext['searchCondition']
  rowsPerPage: ToDoListTableContext['rowsPerPage']
  currentPage: ToDoListTableContext['currentPage']
}

export const initialToDoListTableReducerState: ToDoListTableReducerState = {
  isShowColumn: defaultToDoListTableIsShowColumns,
  searchCondition: undefined,
  rowsPerPage: DEFAULT_ROWS_PER_PAGE,
  currentPage: DEFAULT_CURRENT_PAGE
}

export type ToDoListTableReducerAction =
  | {
      type: 'SET_IS_SHOW_COLUMN'
      payLoad: {
        column: keyof ToDoListTableReducerState['isShowColumn']
        isShow: boolean
      }
    }
  | {
      type: 'SET_SEARCH_CONDITION'
      payLoad: {
        searchCondition: ToDoListTableContext['searchCondition']
      }
    }
  | {
      type: 'SET_ROWS_PER_PAGE'
      payLoad: {
        rowsPerPage: ToDoListTableContext['rowsPerPage']
      }
    }
  | {
      type: 'SET_CURRENT_PAGE'
      payLoad: {
        currentPage: ToDoListTableContext['currentPage']
      }
    }

/**
 * ToDoリストテーブルで使用するReducer
 */
export const ToDoListTableReducer = (
  state: ToDoListTableReducerState,
  action: ToDoListTableReducerAction
): ToDoListTableReducerState => {
  switch (action.type) {
    case 'SET_IS_SHOW_COLUMN':
      return {
        ...state,
        isShowColumn: {
          ...state.isShowColumn,
          [action.payLoad.column]: action.payLoad.isShow
        }
      }
    case 'SET_SEARCH_CONDITION':
      return {
        ...state,
        searchCondition: action.payLoad.searchCondition
      }
    case 'SET_ROWS_PER_PAGE':
      return {
        ...state,
        rowsPerPage: action.payLoad.rowsPerPage
      }
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payLoad.currentPage
      }
    default:
      return state
  }
}
