import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCars() {
    const { data, error, isLoading } = useSWR("/api/wishlists", fetcher);

    return {
        wishlist: data || [],
        isLoading,
        isError: error,
    };
}
