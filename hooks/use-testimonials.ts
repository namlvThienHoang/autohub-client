import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useTestimonials() {
    const { data, error, isLoading } = useSWR("/api/testimonials", fetcher);

    return {
        testimonials: data,
        isLoading,
        isError: error,
    };
}
