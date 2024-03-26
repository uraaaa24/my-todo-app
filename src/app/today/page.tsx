import { generateCurrentDateToDoEndpoint } from '@/constants/api'
import { currentDate } from '@/utils'
import { Container, Typography } from '@mui/material'
import ToDoForm from './_components/todoForm'

async function getTodoByDate(date: string) {
  const responses = await fetch(generateCurrentDateToDoEndpoint(date), {
    cache: 'no-store'
  })

  const todoByDate = await responses.json()

  return todoByDate
}

const Today = async () => {
  const currentDate2 = new Date().toISOString()
  const today = currentDate()
  const todoByDate = await getTodoByDate(currentDate2)

  return (
    <>
      <Typography variant="h4">{today}</Typography>
      <Container maxWidth="sm" sx={{ mt: 2 }}>
        <ToDoForm />
        {todoByDate.map((todo: any) => (
          <Typography key={todo.id}>{todo.title}</Typography>
        ))}
      </Container>
    </>
  )
}

export default Today
