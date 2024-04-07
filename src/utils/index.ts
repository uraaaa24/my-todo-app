/**
 * 現在の日付を取得する
 */
export const currentDateString = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()

  return `${year}-${month}-${date}`
}

/**
 * フォーマットされた日時を表示する
 * @param date 日時
 */
export const formatDateTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()

  return `${year}/${month}/${day} ${hour}:${minute}`
}
