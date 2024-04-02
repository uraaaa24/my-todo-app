import prisma from '@/lib/prisma/client'
import { NextResponse } from 'next/server'

/**
 * ToDoリストを全て取得する
 */
export async function GET() {
  const allTodos = await prisma.todo.findMany()
  return NextResponse.json(allTodos)
}

/**
 * ToDoを追加する
 */
export async function POST(req: Request) {
  const { title, userId } = await req.json()

  const allTodo = await prisma.todo.create({
    data: {
      title,
      userId
    }
  })
  return NextResponse.json(allTodo)
}
