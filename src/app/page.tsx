import { Todo } from '@/types/model'

async function getAllTodo() {
  const responses = await fetch('http://localhost:3000/api/todo', {
    cache: 'no-store'
  })

  const allTodo: Todo[] = await responses.json()

  return allTodo
}

export default async function Home() {
  const allTodo = await getAllTodo()

  return <div>{allTodo && allTodo.map((todo) => <div key={todo.id}>{todo.title}</div>)}</div>
}
