import { componente } from "../models/Componente.model";

export interface basket {
  basketItems: basketItem[];
}

export interface basketItem {
  cartComponents: componente;
  quantity: number;
}
