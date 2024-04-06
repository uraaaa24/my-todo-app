'use client'

import { API_TODO } from '@/constants/api'
import { TodoFormNames } from '@/schemas/todoTitleInput'
import { TodoFormSchemaInferType, TodoFormValidationSchema } from '@/schemas/todoTitleInput/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import TitleInput from './titleInput'

/**
 * ToDoのフォームコンポーネント
 */
const ToDoForm = () => {
  const router = useRouter()

  const methods = useForm({
    resolver: zodResolver(TodoFormValidationSchema),
    defaultValues: { [TodoFormNames.title]: '' }
  })

  const onSubmit = async (value: TodoFormSchemaInferType) => {
    const { title } = value

    try {
      await fetch(API_TODO, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // TODO: ユーザーIDを固定値で送信しているため、ログイン機能を実装した際に修正する
        body: JSON.stringify({ title, userId: 2 })
      })
      methods.reset()
      router.refresh()
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
