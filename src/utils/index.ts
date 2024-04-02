/**
 * 現在の日付を取得する
 */
export const currentDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()

  return `${year}/${month}/${date}`
}
