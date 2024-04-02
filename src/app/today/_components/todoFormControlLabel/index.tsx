'use client'

import { Todo } from '@/types/model'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useState } from 'react'

type TodoFormControlLabelProps = {
  todo: Todo
}

/**
 * ToDoのチェックボックスとタイトルを表示するコンポーネント
 */
const TodoFormControlLabel = (props: TodoFormControlLabelProps) => {
  const [checked, setChecked] = useState(props.todo.completed)

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} />}
      label={props.todo.title}
      onChange={(_, checked) => setChecked(checked)}
    />
  )
}

export default TodoFormControlLabel
