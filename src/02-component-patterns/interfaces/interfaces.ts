import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}

export interface Product {
    id: number;
    name: string;
    price: number;
    image?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardComponentProps {
    ({ product, children }: ProductCardProps): JSX.Element;
    Buttons: () => JSX.Element;
    Details: ({ name, price, }: {
        name?: string | undefined;
        price?: number | undefined;
    }) => JSX.Element;
    Image: ({ image }: {image?: string}) => JSX.Element;
}