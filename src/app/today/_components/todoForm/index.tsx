'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import TitleInput from './titleInput'

const formSchema = z.object({
  title: z.string().max(50, { message: '50文字以内で入力してください' })
})

/**
 * ToDoのフォームコンポーネント
 */
const ToDoForm = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '' }
  })

  const onSubmit = async () => {
    console.log('submit')
  }

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TitleInput />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
    </FormProvider>
  )
}

export default ToDoForm
