'use client'

import { Todo } from '@/types/model'
import { Checkbox, ListItemButton, ListItemText } from '@mui/material'
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
    <ListItemButton onClick={() => setChecked(!checked)} sx={{ textDecoration: checked ? 'line-through' : 'none' }}>
      <Checkbox checked={checked} />
      <ListItemText primary={props.todo.title} />
    </ListItemButton>
  )
}

export default TodoFormControlLabel
