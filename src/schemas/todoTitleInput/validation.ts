import { z } from 'zod'
import { TodoFormNames } from '.'

const MIN_TITLE_LENGTH = 1
const MAX_TITLE_LENGTH = 50

/** Todoを入力するフォームのスキーマ */
export type TodoFormObjectSchema = z.ZodObject<{
  [TodoFormNames.title]: z.ZodString
}>

/** Todoを入力するフォームの型 */
export type TodoFormSchemaInferType = z.infer<TodoFormObjectSchema>

/** Todoを入力するフォームで使用するバリデーションメッセージ */
const TodoFormValidationMessages = {
  [TodoFormNames.title]: {
    min: 'タイトルを入力してください',
    max: `${MAX_TITLE_LENGTH}文字以内で入力してください`
  }
}

/** Todoを入力するフォームのバリデーションスキーマ */
export const TodoFormValidationSchema: TodoFormObjectSchema = z.object({
  [TodoFormNames.title]: z
    .string()
    .min(MIN_TITLE_LENGTH, { message: TodoFormValidationMessages[TodoFormNames.title].min })
    .max(MAX_TITLE_LENGTH, { message: TodoFormValidationMessages[TodoFormNames.title].min })
})
