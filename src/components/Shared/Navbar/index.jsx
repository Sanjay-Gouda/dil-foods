/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const isHome = location.pathname === "/";
  const isCheckoutPage = location.pathname === "/checkout";

  const cartLength = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
        <p
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
            className="h-14"
            alt="Flowbite Logo"
          />
        </p>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <p
                onClick={() => navigate("/")}
                className={`block cursor-pointer py-2 px-3 text-gray-900  rounded md:bg-transparent  md:p-0 ${
                  isHome ? `md:text-blue-700` : null
                }`}
                aria-current="page"
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => navigate("/checkout")}
                className={`block cursor-pointer py-2 px-3 text-gray-900  rounded md:bg-transparent  md:p-0 ${
                  isCheckoutPage ? `md:text-blue-700` : null
                }`}
              >
                Cart({cartLength?.length})
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
