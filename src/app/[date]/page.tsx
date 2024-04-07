import { generateCurrentDateToDoEndpoint } from '@/constants/api'
import { Box, Typography } from '@mui/material'
import TodoByDateListTable from './_components/todoByDateListTable'
import ToDoForm from './_components/todoForm'

async function getTodoByDate(date: string) {
  const response = await fetch(generateCurrentDateToDoEndpoint(date), {
    cache: 'no-store'
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`Error ${response.status}: ${errorData.message}`)
  }

  const todoByDate = await response.json()
  return todoByDate
}

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
        <TodoByDateListTable todo={todoByDate} />
      </Box>
    </>
  )
}

export default DesignatedDate
