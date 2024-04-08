import { generateToDoByIdEndpoint } from '@/constants/api'
import { TODO_HEADER } from '@/constants/table'
import { useToDoListTableContext } from '@/context/todoListTableContext'
import { TodoTableRow } from '@/types/table'
import { currentDateString } from '@/utils'
import { Checkbox, TableBody, TableCell, TableRow } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

type TodoByDateListTableBodyProps = {
  todo: TodoTableRow[]
}

const updateTodo = async (date: string, id: number, completed: boolean) => {
  try {
    const res = await fetch(generateToDoByIdEndpoint(currentDateString(), id.toString()), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed })
    })
  } catch (error) {
    console.error('Error updating todo:', error)
    return { error: 'Error updating todo' }
  }
}

/**
 * 日付指定のToDoリストを表示するテーブルのボディ
 */
const TodoByDateListTableBody = (props: TodoByDateListTableBodyProps) => {
  const { control, getValues, setValue } = useForm()
  const { isShowColumns } = useToDoListTableContext()

  const handleCheckboxChange = async (date: string, id: number, checked: boolean) => {
    await updateTodo(date, id, checked)
    setValue(`completed.${id}`, checked)
  }

  return (
    <TableBody>
      {props.todo.map((todo) => (
        <TableRow key={todo.id} hover>
          {isShowColumns[TODO_HEADER.completed] && (
            <TableCell>
              <Controller
                name={`completed.${todo.id}`}
                control={control}
                defaultValue={todo.completed}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    checked={field.value}
                    onChange={(e) => handleCheckboxChange(todo.createdAt, todo.id, e.target.checked)}
                    sx={{ padding: 0 }}
                  />
                )}
              />
            </TableCell>
          )}
          {isShowColumns[TODO_HEADER.index] && <TableCell>{todo.index}</TableCell>}
          {isShowColumns[TODO_HEADER.title] && <TableCell>{todo.title}</TableCell>}
          {isShowColumns[TODO_HEADER.description] && <TableCell>{todo.description}</TableCell>}
          {isShowColumns[TODO_HEADER.dueDate] && <TableCell>{todo.dueDate}</TableCell>}
          {isShowColumns[TODO_HEADER.time] && <TableCell>{todo.time}</TableCell>}
          {isShowColumns[TODO_HEADER.createdAt] && <TableCell>{todo.createdAt}</TableCell>}
          {isShowColumns[TODO_HEADER.updatedAt] && <TableCell>{todo.updatedAt}</TableCell>}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default TodoByDateListTableBody
