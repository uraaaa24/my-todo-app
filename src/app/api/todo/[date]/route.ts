import prisma from '@/lib/prisma/client'
import { endOfDay, startOfDay } from 'date-fns'
import { NextRequest, NextResponse } from 'next/server'

/**
 * 指定された日付のToDoを取得する
 */
export async function GET(req: NextRequest, { params }: { params: { date: string } }) {
  const date = params.date

  if (!date) {
    return NextResponse.json([], { status: 400, statusText: 'Missing date parameter' })
  }

  const parsedDate = new Date(date)
  const startOfDateRange = startOfDay(parsedDate)
  const endOfDateRange = endOfDay(parsedDate)

  const todosByDate = await prisma.todo.findMany({
    where: {
      createdAt: {
        gte: startOfDateRange,
        lte: endOfDateRange
      }
    }
  })

  if (!todosByDate) {
    return NextResponse.json([], { status: 404, statusText: 'No todos found' })
  }

  return NextResponse.json(todosByDate, { status: 200 })
}
