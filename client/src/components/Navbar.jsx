import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>SmartStore</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>

        <Link to="/register" style={{ color: "white" }}>
          Register
        </Link>

        <Link to="/cart" style={{ color: "white" }}>
          🛒 Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;