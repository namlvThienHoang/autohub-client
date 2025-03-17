import { useState, useEffect } from "react";
import axios from "axios";

const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY; // Lưu Access Key vào .env

const useUnsplash = (query: string, perPage = 9) => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                    params: {
                        query,
                        per_page: perPage,
                        orientation: "landscape",
                        client_id: ACCESS_KEY,
                    },
                });
                console.log("unsplash response: ", response);

                const imageUrls = response.data.results.map((img: any) => img.urls.regular);
                setImages(imageUrls);
            } catch (error) {
                console.error("Error fetching images from Unsplash:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [query, perPage]);

    return { images, loading };
};

export default useUnsplash;
