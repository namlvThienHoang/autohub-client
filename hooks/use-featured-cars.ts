import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useFeaturedCars() {
    const { data, error, isLoading } = useSWR("/api/featured-cars", fetcher)

    return {
        cars: data,
        isLoading,
        isError: error,
    }
}
