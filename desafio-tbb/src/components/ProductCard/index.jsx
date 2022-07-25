import { Container, Info } from "./styles";

const Product = ({ product }) => {
  const image = product.images[0].asset.url;
  const alt = product.images[0].alt;
  const category = product.category.name;
  const name = product.name;
  const description = product.shortDescription;
  return (
    <Container>
      <img src={image} alt={alt} />
      <Info>
        <h3>{name}</h3>
        <span>{category}</span>
        <p>{description}</p>
      </Info>
    </Container>
  );
};

export default Product;
