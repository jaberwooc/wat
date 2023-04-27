import { useState } from "react";
import { basket } from "../models/Cart.model";

export const useBasket = () => {
  const [basket, setBasket] = useState<basket>({ basketItems: [] });

  return {
    basket,
    setBasket,
  };
};
