import prisma from '@/lib/prisma/client'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const allTodo = await prisma.todo.findMany()
  return NextResponse.json(allTodo)
}

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
