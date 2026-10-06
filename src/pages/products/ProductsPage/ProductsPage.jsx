import { useProducts } from "../../../features/products/hooks/useProducts";

const ProductsPage = () => {
    const { products, loading, error } = useProducts();
    
    if(loading) {
        return (
            <div>
                Product still Loading...
            </div>
        );
    return (
        <>
        <div> Product Page </div>
        <ul>
            {
                products.map((prod) => (
                    <li key={prod.id}>{prod.title}
            })
        </ul>
        </>
    )
};

export default ProductsPage;