import { useEffect, useState } from "react";
import Card from "../Shared/Card";
import { useDispatch } from "react-redux";
import { setProductsList } from "../../store/slices/productList";
import { useNavigate } from "react-router-dom";
import { handleCart } from "../../store/slices/cart";

const ProductList = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data.products);
      dispatch(setProductsList(data.products));
      setList(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    productList();
  }, []);

  const handleProductDetail = (id) => {
    navigate(`/product-details/${id}`);
  };

  const handleAddToCart = (id) => {
    const cartItem = list?.find((item) => item.id == id);

    dispatch(handleCart(cartItem));
  };

  return (
    <div className="flex w-full flex-wrap gap-4 ">
      {list?.slice(0, 8)?.map((li) => (
        <Card
          key={li?.id}
          title={li?.title}
          desc={li?.desc}
          price={li?.price}
          thumbnail={li?.thumbnail}
          handleAddToCart={() => handleAddToCart(li?.id)}
          handleProductDetail={() => handleProductDetail(li?.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
