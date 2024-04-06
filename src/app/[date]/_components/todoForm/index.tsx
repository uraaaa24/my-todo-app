'use client'

import { API_TODO } from '@/constants/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '' }
  })

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    const { title } = value

    try {
      await fetch(API_TODO, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, userId: 2 })
      })
      router.push('/')
    } catch (error) {
      console.error(error)
    }
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
