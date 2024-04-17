import { useContext } from "react";

import { ProductContext } from "../context/ProductContex";
import styles from "../styles/styles.module.css";
import { ProductDetailProps } from "../interfaces/interfaces";

export const ProductDetails = ({
  name,
  price,
  className,
  style,
}: ProductDetailProps) => {
  const { product } = useContext(ProductContext);

  return (
    <>
      <span
        className={`${styles.productDescription} ${className}`}
        style={style}
      >
        {name ? name : product.name}
      </span>
      <span
        className={`${styles.productDescription} ${className}`}
        style={style}
      >
        {price ? price : product.price}
      </span>
    </>
  );
};
