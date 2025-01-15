import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  return <div>{"You searched for " + searchParams.get("q")}</div>;
};

export default Products;
