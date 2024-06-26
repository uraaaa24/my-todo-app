import { generateCurrentDateToDoEndpoint } from '@/constants/api'
import { currentDate } from '@/utils'
import { Container, Typography } from '@mui/material'
import ToDoForm from './_components/todoForm'

async function getTodoByDate(date: string) {
  const response = await fetch(generateCurrentDateToDoEndpoint(date), {
    cache: 'no-store'
  })

  if (!response.ok) {
    // エラー処理
    const errorData = await response.json()
    throw new Error(`Error ${response.status}: ${errorData.message}`)
  }

  const todoByDate = await response.json()
  return todoByDate
}

/**
 * 当日のToDoページ
 */
const Today = async () => {
  const currentDate2 = new Date().toISOString().split('T')[0]
  const today = currentDate().replace(/\//g, '-')
  const todoByDate = await getTodoByDate(currentDate2)

  return (
    <>
      <Typography variant="h4">{today}</Typography>
      <Container maxWidth="sm" sx={{ mt: 2 }}>
        <ToDoForm />
        {todoByDate && todoByDate.map((todo: any) => <Typography key={todo.id}>{todo.title}</Typography>)}
      </Container>
    </>
  )
}

export default Today
