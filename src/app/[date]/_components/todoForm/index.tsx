'use client'

import { API_TODO } from '@/constants/api'
import { TodoFormNames } from '@/schemas/todoTitleInput'
import { TodoFormSchemaInferType, TodoFormValidationSchema } from '@/schemas/todoTitleInput/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Dialog, DialogTitle } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import TitleInput from './titleInput'

/**
 * ToDoのフォームコンポーネント
 */
const ToDoForm = () => {
  const router = useRouter()

  const [open, setOpen] = useState(false)

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
    } finally {
      handleClose()
    }
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <FormProvider {...methods}>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'right', mb: 1.5 }}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
          Add
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ToDoを追加</DialogTitle>
        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} display="flex" flexDirection="column" gap={2} p={2}>
          <TitleInput />
          <Button type="submit" variant="contained">
            保存
          </Button>
        </Box>
      </Dialog>
    </FormProvider>
  )
}

export default ToDoForm
