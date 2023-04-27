import { TrashIcon } from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction, useState } from "react";
import useWindowDimensions from "../hooks/useDimensions";
import { basket, basketItem } from "../models/Cart.model";
import { componente, componenteList } from "../models/Componente.model";

interface SidePanelProps {
  setCart: Dispatch<SetStateAction<basket>>;
  basket: basket;
}

const SidePanel = ({ setCart, basket }: SidePanelProps) => {
  const { height } = useWindowDimensions();
  const { basketItems } = basket;

  const deleteItem = (basketItem: basketItem) => {
    const filteredBasket = basket.basketItems.filter(
      (item) => item.cartComponents.id !== basketItem.cartComponents.id
    );

    setCart({ ...basket, basketItems: filteredBasket });
  };

  const getTotal = () => {
    const total = basketItems.reduce(
      (acc, basketItem) =>
        acc + basketItem.cartComponents.precio * basketItem.quantity,
      0
    );

    return total + total * 0.16;
  };

  const getSubTotal = () => {
    const subTotal = basketItems.reduce(
      (acc, basketItem) =>
        acc + basketItem.cartComponents.precio * basketItem.quantity,
      0
    );

    return subTotal;
  };

  return (
    <div
      className={`flex flex-col max-h-screen justify-between mt-1 w-full max-w-lg bg-gray-50 h-[${height}] shadow-md p-4 `}
    >
      <div>
        <h1 className="text-3xl text-center mt-8">Detalle de Venta</h1>
        <div>
          <div
            className="
            flex flex-row justify-between mt-8 font-semibold
          "
          >
            <h1 className="text-lg">Accion</h1>
            <h1 className="text-lg">Producto</h1>
            <h1 className="text-lg">Precio</h1>
            <h1 className="text-lg">Cantidad</h1>
          </div>
          {/* divider */}
          <hr className="my-5 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-50" />
        </div>

        {basketItems.map((basket) => (
          <div
            className="
            flex flex-row justify-between mt-8 font-light px-5
          "
            key={basket.cartComponents.id}
          >
            <TrashIcon
              className="h-6 w-6 text-black cursor-pointer hover:text-red-600"
              onClick={() => deleteItem(basket)}
            />
            <h1 className="text-lg">{basket.cartComponents.nombre}</h1>
            <h1 className="text-lg">${basket.cartComponents.precio}</h1>
            <h1 className="text-lg">{basket.quantity}</h1>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-row justify-between mt-8">
          <h1 className="text-lg">Subtotal</h1>
          <h1 className="text-lg">$ {getSubTotal().toFixed(2)}</h1>
        </div>
        <div className="flex flex-row justify-between mt-8">
          <h1 className="text-lg">Total</h1>
          <h1 className="text-lg">${getTotal().toFixed(2)}</h1>
        </div>
        <button
          type="submit"
          className="text-white text-lg w-full mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
