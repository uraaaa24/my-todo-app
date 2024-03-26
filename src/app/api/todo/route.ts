import prisma from '@/lib/prisma/client'
import { parseISO } from 'date-fns'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

async function getAllTodo() {
  return await prisma.todo.findMany()
}

async function getTodoByDate(date: string) {
  const parsedDate = parseISO(date)

  return await prisma.todo.findMany({
    where: {
      createdAt: parsedDate
    }
  })
}

export async function GET(req: NextApiRequest, { params }) {
  const date = params?.date

  let result = []

  if (date) {
    result = await getTodoByDate(date.toString())
  } else {
    result = await getAllTodo()
  }

  return NextResponse.json(result)
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
