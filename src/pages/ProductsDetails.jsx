import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h3 className="text-2xl font-bold mb-4">😕 Product Not Found</h3>
        <Link to="/products" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row gap-6">
       <div className="md:w-1/2 flex justify-center items-center p-4">
  <img
    src={product.image}
    alt={product.name}
    className="rounded-lg object-contain max-h-92 max-w-md transition-all duration-300"
  />
</div>
        <div className="md:w-1/2 p-10 flex flex-col">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-green-600 text-2xl font-semibold mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Back
            </button>
            <button className="bg-green-800 text-yellow-400 px-4 py-2 rounded hover:bg-greeb-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;