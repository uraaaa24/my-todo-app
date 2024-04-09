import { generateCurrentDateToDoEndpoint } from '@/constants/api'
import { useFetcher } from '@/hooks/useFetcher'
import { useCallback, useState } from 'react'
import useSWR from 'swr'

export const useGetTodoByDate = (date: string) => {
  const { fetcher } = useFetcher()

  const getSwrKey = useCallback((date: string) => {
    return generateCurrentDateToDoEndpoint(date)
  }, [])

  const [swrKey, setSwrKey] = useState<string | null>(getSwrKey(date))

  const { data, error, isLoading, isValidating } = useSWR(swrKey, fetcher)

  const refetchKey = useCallback(
    (date: string) => {
      setSwrKey(getSwrKey(date))
    },
    [getSwrKey]
  )

  return { data, error, isLoading, isValidating, refetchKey }
}
