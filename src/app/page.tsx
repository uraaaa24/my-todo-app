async function getAllTodo() {
  const responses = await fetch('http://localhost:3000/api/todo', {
    cache: 'no-store'
  })

  const allTodo = await responses.json()

  return allTodo
}

export default async function Home() {
  const allTodo = await getAllTodo()

  return <div>hello</div>
}
