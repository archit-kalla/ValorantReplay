import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>ValReplay</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/test">test</Link>
      </div>
    </nav>
  );
}
export default Navbar;