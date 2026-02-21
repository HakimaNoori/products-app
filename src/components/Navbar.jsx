import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <NavLink className="text-yellow-500 font-bold text-3xl" to="/">Product Catalog</NavLink>

        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-400 pb-1"
                  : "text-yellow-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-400 pb-1"
                  : "text-yellow-500"
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;