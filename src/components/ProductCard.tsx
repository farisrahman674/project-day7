import React from "react";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  isAdded: boolean;
  onToggle: (id: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  isAdded,
  onToggle,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "6px" }}
      />
      <h3>{name}</h3>
      <p>Rp {price.toLocaleString()}</p>
      <button
        onClick={() => onToggle(id)}
        style={{
          marginTop: "8px",
          padding: "8px 12px",
          backgroundColor: isAdded ? "#81c784" : "#64b5f6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
