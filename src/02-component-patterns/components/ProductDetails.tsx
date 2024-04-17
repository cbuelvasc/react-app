import { useContext } from "react";

import { ProductContext } from "../context/ProductContex";
import styles from "../styles/styles.module.css";

export const ProductDetails = ({
  name,
  price,
}: {
  name?: string;
  price?: number;
}) => {
  const { product } = useContext(ProductContext);

  return (
    <>
      <span className={styles.productDescription}>
        {name ? name : product.name}
      </span>
      <span className={styles.productDescription}>
        {price ? price : product.price}
      </span>
    </>
  );
};
