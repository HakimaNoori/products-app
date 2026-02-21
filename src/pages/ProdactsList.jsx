import { Link } from "react-router-dom";
import products from "../data/products";

function ProductList() {
  return (
    <div className="container mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative w-full h-64 flex items-center justify-center overflow-hidden rounded-t-2xl">
  <img
    src={product.image}
    alt={product.name}
    className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
  />
</div>

          <div className="p-6 flex flex-col h-56">
            <h3 className="font-bold text-xl mb-2 text-gray-800">{product.name}</h3>
            <p className="text-green-600 font-semibold text-lg mb-4">${product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="mt-auto bg-gradient-to-r from-green-700 to-green-700 text-yellow-400 py-2 px-5 rounded-lg text-center font-semibold shadow-lg hover:from-green-600 hover:to-green-800 hover:shadow-xl transition-all duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;