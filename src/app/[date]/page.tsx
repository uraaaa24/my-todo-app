import { getTodoByDate } from '@/utils/requester/get/todo/date'
import { Box, Typography } from '@mui/material'
import TodoByDateListTable from './_components/todoByDateListTable'
import ToDoForm from './_components/todoForm'

/**
 * 指定された日付のToDoを表示するページ
 */
const DesignatedDate = async ({ params }: { params: { date: string } }) => {
  const currentDate = params.date
  const todoByDate = await getTodoByDate(currentDate)

  return (
    <>
      <Typography variant="h4">{currentDate}</Typography>
      <Box sx={{ mt: 2 }}>
        <ToDoForm />
        <TodoByDateListTable todo={todoByDate} currentDate={currentDate} />
      </Box>
    </>
  )
}

export default DesignatedDate
