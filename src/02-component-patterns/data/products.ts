import { Product } from "../interfaces/interfaces";

const productOne = {
    id: 1,
    name: "Coffee Mug - Card",
    price: 10,
    image: "./coffee-mug.png",
  };
  
  const productTwo = {
    id: 2,
    name: "Coffee Mug - Meme",
    price: 12,
    image: "./coffee-mug2.png",
  };
  
export const products: Product[] = [productOne, productTwo];