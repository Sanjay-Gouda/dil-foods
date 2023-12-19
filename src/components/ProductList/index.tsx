import React, { useEffect, useState } from "react";
import Card from "../Shared/Card";
import { useDispatch } from "react-redux";
import { setProductsList } from "../../store/slices/productList";

const ProductList = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

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
    console.log("hello", id);
  };
  return (
    <div className="flex w-full flex-wrap gap-4 ">
      {list?.slice(0, 8)?.map((li: any) => (
        <Card
          key={li?.id}
          title={li?.title}
          desc={li?.desc}
          price={li?.price}
          thumbnail={li?.thumbnail}
          handleProductDetail={() => handleProductDetail(li?.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
