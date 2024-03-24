'use client'

import { FormProvider, useForm } from 'react-hook-form'

const ToDoForm = () => {
  const methods = useForm()

  return <FormProvider {...methods}>test</FormProvider>
}

export default ToDoForm
