export const TODO_HEADER = {
  id: 'No.',
  title: 'Title',
  description: 'Description',
  completed: 'Completed',
  dueDate: 'Due Date',
  time: 'Time',
  createdAt: 'Created At',
  updatedAt: 'Updated At'
} as const
export type ToDoHeader = (typeof TODO_HEADER)[keyof typeof TODO_HEADER]

export const ROWS_PER_PAGE_OPTIONS = [5, 10, 25]
export const DEFAULT_ROWS_PER_PAGE = 5
export const DEFAULT_CURRENT_PAGE = 0
