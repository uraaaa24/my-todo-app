import { Input } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

const TitleInput = () => {
  const { control } = useFormContext()

  return <Controller control={control} name="title" render={({ field }) => <Input {...field} required />} />
}

export default TitleInput
