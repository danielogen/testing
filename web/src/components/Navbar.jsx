import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white text-black p-4 mt-2 flex justify-between items-center">
      {/* Logo */}
      <div className="text-4xl font-extrabold">
        <div className="ml-4">
          <Link to="/">
            <span className="text-black">MyCourse</span>
            <span className="text-blue-600">Evaluation</span>
          </Link>
        </div>
      </div>
      {/* Top Right Corner */}
      <div className="flex space-x-2 items-center mr-8">
        <button className="bg-black text-white p-2 rounded hover:bg-gray-800">
          Light Mode
        </button>
        <div className="flex space-x-4">
          <Link to="/about" className="text-black hover:underline">
            About
          </Link>
          <Link
            to="/request-school"
            className="text-black hover:underline mr-2"
          >
            Request a School
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;