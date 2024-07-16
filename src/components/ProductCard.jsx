import { useQuery } from "react-query";
import { useState, useContext, useMemo } from "react";
import { CartContext } from "../context/Context";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const ProductCard = () => {
  const { data, isLoading } = useQuery(["products"], () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );

  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const filteredAndSortedProducts = useMemo(() => {
    if (!data) return [];

    let filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOption === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "name-desc") {
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filteredProducts;
  }, [data, searchQuery, sortOption]);

  return (
    <div>
      <div className="flex justify-between mb-4 p-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="border p-2 rounded-lg w-full md:w-1/3"
        />
        <select
          onChange={handleSort}
          value={sortOption}
          className="border p-2 rounded-lg ml-4"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex items-center flex-wrap w-[100%]">
          {filteredAndSortedProducts.map((product, index) => {
            product.quantity = 1;
            return (
              <div
                key={index}
                className="mt-5 container mx-auto p-4 sm:p-9 bg-white rounded-xl w-36 sm:w-72 overflow-hidden shadow-lg hover:shadow-xl  transition duration-300 "
              >
                <img
                  className="rounded-xl w-40 sm:w-72 h-32 sm:h-52 hover:scale-110 duration-300 "
                  src={product.image}
                  alt="product"
                />
                <div className="flex-col justify-between items-center">
                  <div>
                    <h1 className="mt-5 text-xs font-semibold sm:text-2xl truncate">
                      {product.title}
                    </h1>
                  </div>
                  <div>
                    <p className="mt-2 text-xl sm:text-2xl">
                      ${product.price}
                    </p>
                  </div>
                  <div className="mt-5">
                    <button
                      className="w-24 text-white text-xs font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 sm:text-xl sm:w-36"
                      onClick={() => {
                        dispatch({ type: "ADD", payload: product });

                        toast.success("Added to cart", {
                          position: "top-center",
                          autoClose: 300,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: false,
                          draggable: false,
                          progress: 0,
                          theme: "light",
                        });
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
