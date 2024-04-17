import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export interface ProductDetailProps {
    name?: string;
    price?: number;
    className?: string;
    style?: React.CSSProperties;
}

export interface ProductImageProps {
    image?: string;
    className?: string;
    style?: React.CSSProperties;
}

export interface ProductButtonsProps {
    className?: string;
    style?: React.CSSProperties;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    image?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;    
}

export interface ProductCardComponentProps {
    (props: ProductCardProps): JSX.Element;
    Buttons: (props: ProductButtonsProps) => JSX.Element;
    Details: (props: ProductDetailProps) => JSX.Element;
    Image: (props: ProductImageProps) => JSX.Element;
}