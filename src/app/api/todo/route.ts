import prisma from '@/lib/prisma/client'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const allTodos = await prisma.todo.findMany()
  return NextResponse.json(allTodos)
}
