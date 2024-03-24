import { ROWS_PER_PAGE_OPTIONS } from '@/constants/table'
import { useToDoListTableContext } from '@/context/todoListTableContext'
import { TableFooter, TablePagination, TableRow } from '@mui/material'

type ToDoListTableFooterProps = {
  totalCount: number
}

/**
 * ToDoリストを表示するテーブルのフッター
 */
const ToDoListTableFooter = (props: ToDoListTableFooterProps) => {
  const { isShowColumns, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage } = useToDoListTableContext()

  /**
   * 表示件数の選択肢を生成する
   * @param totalCount 全件数
   */
  const generateRowsPerPageOptions = (totalCount: number) => {
    const options = ROWS_PER_PAGE_OPTIONS.filter((option) => option <= totalCount)
    return options.length === 0 ? [totalCount] : options
  }

  const rowsPerPageOptions = generateRowsPerPageOptions(props.totalCount)

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          colSpan={Object.values(isShowColumns).filter((isShow) => isShow).length}
          page={currentPage}
          count={props.totalCount}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          labelRowsPerPage="表示件数"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} / ${count}`}
          onPageChange={(e, newPage) => setCurrentPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10))
            setCurrentPage(0)
          }}
        />
      </TableRow>
    </TableFooter>
  )
}

export default ToDoListTableFooter
