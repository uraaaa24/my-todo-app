import { currentDate } from '@/utils'
import { Box, Typography } from '@mui/material'
import ToDoForm from './_components/todoForm'

const Today = async () => {
  const today = currentDate()

  return (
    <>
      <Typography variant="h4">{today}</Typography>
      <Box sx={{ mt: 2 }}>
        <ToDoForm />
      </Box>
    </>
  )
}

export default Today
