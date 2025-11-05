import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
            ShopEasy
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-200 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-200 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;