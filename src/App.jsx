import "./App.css";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import Navbar from "./components/Shared/Navbar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <ProductList />
      </Provider>

      {/* <ProductDetail /> */}
    </>
  );
}

export default App;
