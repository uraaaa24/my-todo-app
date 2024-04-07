import prisma from '@/lib/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

/**
 * 指定されたToDoの完了状態を更新する
 */
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params
  const integerId = parseInt(id)

  if (!id) {
    return NextResponse.json([], { status: 400, statusText: 'Missing id parameter' })
  }

  try {
    const body = await req.json()
    const updateTodoById = await prisma.todo.update({
      where: { id: integerId },
      data: {
        completed: body.completed
      }
    })
    return NextResponse.json(updateTodoById, { status: 200 })
  } catch (error) {
    console.error('Error updating todo:', error)
    return NextResponse.json({ error: 'Error updating todo' }, { status: 500 })
  }
}
