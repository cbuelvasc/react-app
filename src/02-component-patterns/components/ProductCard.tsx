import { Provider } from "../context/ProductContex";

import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { ProductCardProps } from "../interfaces/interfaces";

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
