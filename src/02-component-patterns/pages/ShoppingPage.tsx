import ProductCard, { ProductButtons, ProductDetails, ProductImage } from "../components";

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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Details />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductDetails name={"Mug"} price={29} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
//compound-component-pattern