import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/global";

import products from "./database/products";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <ProductList products={products[0].data.nodes} />
    </div>
  );
}

export default App;
