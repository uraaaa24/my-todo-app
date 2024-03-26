import { currentDate } from '@/utils'
import { Container, Typography } from '@mui/material'
import ToDoForm from './_components/todoForm'

const Today = async () => {
  const today = currentDate()

  return (
    <>
      <Typography variant="h4">{today}</Typography>
      <Container maxWidth="sm" sx={{ mt: 2 }}>
        <ToDoForm />
      </Container>
    </>
  )
}

export default Today
