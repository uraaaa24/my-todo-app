import { z } from 'zod'
import { TodoFormNames } from '.'

const MAX_TITLE_LENGTH = 50

/** Todoを入力するフォームのスキーマ */
export type TodoFormObjectSchema = z.ZodObject<{
  [TodoFormNames.title]: z.ZodString
}>

/** Todoを入力するフォームの型 */
export type TodoFormSchemaInferType = z.infer<TodoFormObjectSchema>

/** Todoを入力するフォームで使用するバリデーションメッセージ */
const TodoFormValidationMessages = {
  [TodoFormNames.title]: '50文字以内で入力してください'
}

/** Todoを入力するフォームのバリデーションスキーマ */
export const TodoFormValidationSchema: TodoFormObjectSchema = z.object({
  [TodoFormNames.title]: z.string().max(MAX_TITLE_LENGTH, { message: TodoFormValidationMessages[TodoFormNames.title] })
})
