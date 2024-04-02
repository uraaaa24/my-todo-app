import { FormHelperText, Input } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

/**
 * ToDoのタイトルを入力するコンポーネント
 */
const TitleInput = () => {
  const { control } = useFormContext()

  return (
    <>
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState }) => (
          <>
            <Input fullWidth {...field} />
            <FormHelperText error>{fieldState.error?.message}</FormHelperText>
          </>
        )}
      />
    </>
  )
}

export default TitleInput
