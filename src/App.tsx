import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import laptopImg from "./assets/LAPTOP.jpg";
import keyboard from "./assets/KEYBOARD.jpg";
import headset from "./assets/HEADSET.jpg";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 15000000,
    image: laptopImg,
  },
  {
    id: 2,
    name: "Headset",
    price: 500000,
    image: headset,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 700000,
    image: keyboard,
  },
];

const App = () => {
  const [cart, setCart] = useState<number[]>([]); // Menyimpan ID produk di keranjang

  const toggleCart = (id: number) => {
    if (cart.includes(id)) {
      setCart((prev) => prev.filter((item) => item !== id));
    } else {
      setCart((prev) => [...prev, id]);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Product List</h2>
      <p>
        Jumlah produk di cart: <strong>{cart.length}</strong>
      </p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            isAdded={cart.includes(product.id)}
            onToggle={toggleCart}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
