import "./App.css";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import Navbar from "./components/Shared/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route element={<ProductList />} path="/" />
          <Route element={<ProductDetail />} path="/product-details" />
        </Routes>
      </Provider>

      {/* <ProductDetail /> */}
    </>
  );
}

export default App;
