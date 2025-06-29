import { Link, Route, Routes} from "react-router-dom";
import "../assets/reset.css";
import "../assets/index.css"
import "../styles/Navbar.css"

function Navbar({nbItemsInCart}) {
  return (
    <>
    <nav>
      <Link to="/"><h1>Mamazone</h1></Link>
      <div className="cart-link-container">
        <p>{nbItemsInCart}</p>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
