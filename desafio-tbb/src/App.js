import React from "react";
import { useState } from "react";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import "react-virtualized/styles.css";

import NavBar from "./components/NavBar";
import GlobalStyle from "./styles/global";

import products from "./database/products";
import Product from "./components/ProductCard";

function App() {
  const dataProducts = products[0].data.nodes;
  const [valor, setValor] = useState("");
  const [dataFiltered, setDataFiltered] = useState([]);

  const selectFilter = () => {

    if (valor !== "Todos") {
      const filtered = dataProducts.filter(function (product) {
        return product.category.name === valor;
      });
      setDataFiltered(filtered);
      setValor("");
    } else {
      setDataFiltered([]);
      setValor("");
    }
  };

  const Row = ({ style, index }) => {
    return (
      <div style={{ ...style, display: "flex" }}>
        {dataFiltered.length > 0 ? (
          <Product product={dataFiltered[index]} />
        ) : (
          <Product product={dataProducts[index]} />
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <div>
        <select onChange={(e) => setValor(e.target.value)} name="Categorias">
          <option value="Todos">Todos</option>
          <option value="Aerosol">Aerosol</option>
          <option value="Alcohol en Aerosol">Alcohol en Aerosol</option>
          <option value="Alcohol en Gel">Alcohol en Gel</option>
          <option value="Alcohol en Spray">Alcohol en Spray</option>
          <option value="Barra">Barra</option>
          <option value="Jabón Barra">Jabón Barra</option>
          <option value="Jabón Líquido">Jabón Líquido</option>
          <option value="Talco">Talco</option>
        </select>
        <button onClick={selectFilter}>Filtrar</button>
      </div>
      <div style={{ flex: "1 1 auto", width: "100vw", height: "100vh" }}>
        {dataFiltered.length > 0 ?(
          <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemSize={250}
              itemCount={dataFiltered.length}
            >
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
        ):(
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemSize={250}
              itemCount={dataProducts.length}
            >
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
        )}
      </div>
    </div>
  );
}

export default App;
