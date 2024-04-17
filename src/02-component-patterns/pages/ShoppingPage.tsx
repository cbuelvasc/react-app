import ProductCard, {
  ProductButtons,
  ProductDetails,
  ProductImage,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: 1,
  name: "Coffee Mug",
  price: 10,
  image: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Details className="text-white text-bold" />
          <ProductCard.Buttons className="custom-button" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductDetails
            name={"Mug"}
            price={29}
            className="text-white text-bold"
          />
          <ProductButtons className="custom-button" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductDetails
            name={"Mug"}
            price={29}
            style={{ fontWeight: "bold" }}
          />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
//compound-component-pattern
