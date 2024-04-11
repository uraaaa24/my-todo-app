import { generateCurrentDateToDoEndpoint } from '@/constants/api'
import { Todo } from '@/types/model'

export const getTodoByDate = async (date: string): Promise<Todo[]> => {
  const response = await fetch(generateCurrentDateToDoEndpoint(date), {
    cache: 'no-store'
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`Error ${response.status}: ${errorData.message}`)
  }

  const todoByDate = await response.json()
  return todoByDate
}
