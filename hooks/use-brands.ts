import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useBrands() {
    const { data, error, isLoading } = useSWR("/api/brands", fetcher)

    return {
        brands: data || [],
        isLoading,
        isError: error,
    }
}
