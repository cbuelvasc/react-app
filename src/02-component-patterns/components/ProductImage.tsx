import { useContext } from "react";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "../context/ProductContex";

export const ProductImage = ({ image = "" }) => {
  const { product } = useContext(ProductContext);

  let imgToDisplay: string;

  if (image) {
    imgToDisplay = image;
  } else {
    imgToDisplay = product.image ? product.image : noImage;
  }

  return <img className={styles.productImg} src={imgToDisplay} alt="Product" />;
};
