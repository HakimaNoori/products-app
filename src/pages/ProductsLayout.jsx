import { Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <div className="mx-auto py-12 px-4 bg-gradient-to-r from-green-100 via-green-200 to-green-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
          Our Products
        </h2>
        <p className="text-gray-600 mb-6">
          Discover high-quality electronics and accessories.
        </p>
        <hr className="w-24 mx-auto border-2 border-green-500 rounded-full" />
      </div>

      <Outlet />
    </div>
  );
}

export default ProductsLayout;