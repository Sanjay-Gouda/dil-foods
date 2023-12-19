import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItem = useSelector((state) => state.cart.items);

  console.log(cartItem);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      </div>
      <div className="mt-8">
        {cartItem?.map((item) => (
          <div key={item.id} className="flex justify-between w-full">
            <div
              key={item.id}
              className="flex flex-col md:flex-row border-b border-gray-400 py-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.thumbnail}
                  alt="Product image"
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <div className="mt-4 flex items-start">
                  <span className="font-bold">$20.00</span>
                </div>
              </div>
            </div>

            <div>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center mt-8">
        <span className="text-gray-600 mr-4">Subtotal:</span>
        <span className="text-xl font-bold">$35.00</span>
      </div>
    </div>
  );
};

export default Checkout;
