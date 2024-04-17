import { useContext } from "react";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "../context/ProductContex";
import { ProductImageProps } from "../interfaces/interfaces";

export const ProductImage = ({ image, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  let imgToDisplay: string;

  if (image) {
    imgToDisplay = image;
  } else {
    imgToDisplay = product.image ? product.image : noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToDisplay}
      alt="Product"
    />
  );
};
