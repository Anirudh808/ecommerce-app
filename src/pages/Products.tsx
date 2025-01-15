import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../db/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams.entries()]);
  console.log(params);
  fetchProducts(params).then((res) => console.log(res));
  return <div>Products</div>;
};

export default Products;
