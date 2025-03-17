import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCarDetails(id: string) {
    const { data, error, isLoading } = useSWR(`/api/cars/${id}`, fetcher);

    return {
        car: data,
        isLoading,
        isError: error,
    };
}
