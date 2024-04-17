import { ProductCard as ProductCardComponent } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductDetails } from "./ProductDetails";
import { ProductImage } from "./ProductImage";
import { ProductCardComponentProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductDetails } from "./ProductDetails";
export { ProductImage } from "./ProductImage";

export const ProductCard: ProductCardComponentProps = Object.assign(ProductCardComponent, {
    Buttons: ProductButtons,
    Details: ProductDetails,
    Image: ProductImage
});

export default ProductCard;