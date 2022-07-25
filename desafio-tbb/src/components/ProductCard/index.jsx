import { Container } from "./styles";

const Product = ({ product }) => {
  const image =  product.images[0].asset.url;
  return (
    <Container>
      <img src={image} alt={product.name} />
      <h3>{product.name}</h3>
    </Container>
  );
};

export default Product;
