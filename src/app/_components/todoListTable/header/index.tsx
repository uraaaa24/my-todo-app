import { TODO_HEADER, ToDoHeader } from '@/constants/table'
import { useToDoListTableContext } from '@/context/todoListTableContext'
import { TableCell, TableHead, TableRow } from '@mui/material'

const HEADERS: ToDoHeader[] = Object.values(TODO_HEADER)

/**
 * ToDoリストを表示するテーブルのヘッダー
 */
const ToDoListTableHeader = () => {
  const { isShowColumns } = useToDoListTableContext()

  return (
    <TableHead>
      <TableRow>{HEADERS.map((header) => isShowColumns[header] && <TableCell key={header}>{header}</TableCell>)}</TableRow>
    </TableHead>
  )
}

export default ToDoListTableHeader
