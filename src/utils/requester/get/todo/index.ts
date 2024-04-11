import { API_TODO } from '@/constants/api'
import { Todo } from '@/types/model'

export const getAllTodo = async (): Promise<Todo[]> => {
  const responses = await fetch(API_TODO, {
    cache: 'no-store'
  })

  const allTodo: Todo[] = await responses.json()

  return allTodo
}
