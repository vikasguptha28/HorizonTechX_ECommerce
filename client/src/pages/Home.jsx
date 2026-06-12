import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const [search, setSearch] = useState("");

  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 149999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "iPhone 16",
      price: 89999,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    },
    {
      id: 3,
      name: "Apple Watch",
      price: 29999,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    },
    {
      id: 4,
      name: "AirPods Pro",
      price: 24999,
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        🛒 Smart Store
      </h1>

      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "30px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              background: "white",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{product.name}</h3>

              <p
                style={{
                  fontWeight: "bold",
                  color: "#2563eb",
                }}
              >
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;