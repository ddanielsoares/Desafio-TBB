import Product from "../ProductCard";
import { Container } from "./styles";

const ProductList = ({ products }) => {
    console.log(products)
  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
