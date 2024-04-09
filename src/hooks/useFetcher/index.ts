/**
 * useSwrで使用するfetcherを返すカスタムフック
 */
export const useFetcher = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json())

  return { fetcher }
}
