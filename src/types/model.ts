/**
 * Userテーブルの型定義
 */
export interface User {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  todo: Todo[]
}

/**
 * Todoテーブルの型定義
 */
export interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
  dueDate: Date
  time: number
  createdAt: Date
  updatedAt: Date
  user: User
  userId: number
}
