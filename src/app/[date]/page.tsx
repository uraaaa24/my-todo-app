import { generateCurrentDateToDoEndpoint } from '@/constants/api'
import { Todo } from '@/types/model'
import { Container, Typography } from '@mui/material'
import ToDoForm from './_components/todoForm'
import TodoFormControlLabel from './_components/todoFormControlLabel'

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
const Today = async ({ params }: { params: { date: string } }) => {
  const currentDate = params.date
  const todoByDate = await getTodoByDate(currentDate)

  return (
    <>
      <Typography variant="h4">{currentDate}</Typography>
      <Container maxWidth="sm" sx={{ mt: 2 }}>
        <ToDoForm />
        {todoByDate &&
          todoByDate.map((todo: Todo) => {
            return <TodoFormControlLabel key={todo.id} todo={todo} />
          })}
      </Container>
    </>
  )
}

export default Today
