import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/Context";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Globalstate.state.length + 1, 
      title,
      price: parseFloat(price),
      image,
      quantity: 1,
    };

    dispatch({ type: "ADD", payload: newProduct });

    toast.success("New product added", {
      position: "top-center",
      autoClose: 300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: 0,
      theme: "light",
    });

    navigate("/"); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-emerald-50">
      <form
        className="bg-white p-6 rounded shadow-md w-96"
        onSubmit={handleAddProduct}
      >
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
