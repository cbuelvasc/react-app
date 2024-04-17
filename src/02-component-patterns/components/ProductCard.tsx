import { Provider } from "../context/ProductContex";

import { useProduct } from "../hooks/useProduct";
import { ProductCardProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductCard = ({
  children,
  product,
  className,
  style,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
