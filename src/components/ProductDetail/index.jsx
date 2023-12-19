import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleCart } from "../../store/slices/cart";

const ProductDetail = () => {
  const params = useParams();
  const productList = useSelector((state) => state.products.productDetails);
  const id = params.id;
  const [productDetail, setProductDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const details = productList.find((dt) => dt.id == id);
    setProductDetail(details);
  }, [id]);

  const handleAddToCart = (id) => {
    const cartItem = productList?.find((item) => item.id == id);

    dispatch(handleCart(cartItem));
  };

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={productDetail?.thumbnail}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {productDetail?.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productDetail?.title}
              </h1>

              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                {productDetail?.description}
              </p>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${productDetail?.price}
                </span>
                <button
                  onClick={() => handleAddToCart(id)}
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
