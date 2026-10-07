import { getProducts } from 'api/productsApi';
import { useEffect, useState } from 'react';

export function useProducts() {
    // provides the product array for rendering
    const [products, setProducts] = useState([]);
    // Loading flag will be set to false afterbproduct data is loaded into products state   
    const [loading, setLoading] = useState(true);
    // Error state
    const [error, setError] = useState("");

    // Logic for fetching product data and setting the atate

    useEffect(
        () => {
            let active = true;
            // Effect logic
                // ----./
            // product fetch logic
            async function loadProducts() {
                // Loading product could sometimes have Exceptions
                try {
                    setLoading(true);
                    setError("");

                    // trying to fetch data
                    const data = await getProducts();

                    if (active) {
                        setProducts(data.products);
                    }
                }
                // If product loading failed
                catch (err) {
                    if (active) {
                        setError(err?.reponse?.data?.message || err.message || "Failed to load products");
                    }
                }
                finally {
                    if (active) {
                        // loading is complete, so turning to false
                        setLoading(false);
                    }
                }
            }
            // attempting product loading
            loadProducts();
            // cleanup code 
            return () => {
                active = false;
            };
            // dependency array -> empty here
        },[]);

        return { products, loading, error };
}

