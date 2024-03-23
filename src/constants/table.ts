export const TODO_HEADER = {
  id: 'ID',
  title: 'Title',
  description: 'Description',
  status: 'Status',
  createdAt: 'Created At',
  updatedAt: 'Updated At'
} as const
export type ToDoHeader = (typeof TODO_HEADER)[keyof typeof TODO_HEADER]
