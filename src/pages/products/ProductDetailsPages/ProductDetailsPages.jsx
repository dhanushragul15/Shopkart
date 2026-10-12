import { Link, useParams } from "react-router-dom";
import { useProduct } from "../../../components/features/products/hooks/useProducts";
import styles from "./ProductDetailsPages.module.css";

const ProductDetailsPages = () => {
    const { productId } = useParams();
    // useParama hook helps me accseee the url path parameters in the component
    const { product, loading, error } = useProduct(productId);
}