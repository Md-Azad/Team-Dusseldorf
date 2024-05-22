import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between ">
      <div >
        <Link to="/" className="btn btn-ghost text-3xl">Team Dusseldrof</Link>
      </div>
      <div >
        <ul className="flex gap-4">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
// className="btn btn-ghos text-xl"t