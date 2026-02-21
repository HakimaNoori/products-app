import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="text-center text-yellow-400 mt-6 text-sm">
        &copy; {new Date().getFullYear()} Product Catalog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;