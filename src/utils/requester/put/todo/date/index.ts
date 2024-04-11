import { generateToDoByIdEndpoint } from '@/constants/api'
import { currentDateString } from '@/utils'

export const insertTodo = async (id: number, completed: boolean) => {
  const response = fetch(generateToDoByIdEndpoint(currentDateString(), id.toString()), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ completed })
  })

  return response
}
