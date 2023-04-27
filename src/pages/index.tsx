import { useState } from "react";
import Card from "../components/Card";
import DrawerNavigation from "../components/DrawerNavigation";
import Navbar from "../components/Navbar";
import SidePanel from "../components/SidePanel";
import { DashboardCardTitles } from "../Data/DashboardTitle";
import { useBasket } from "../hooks/useBasket.hook";
import { basketItem, basket } from "../models/Cart.model";
import { componente } from "../models/Componente.model";

export default function Home() {
  const { basket, setBasket } = useBasket();
  const [components, setComponents] =
    useState<componente[]>(DashboardCardTitles);

  const [isOpen, setIsOpen] = useState(false);

  const addTocart = (item: componente) => {
    const existingItemIndex = basket.basketItems.findIndex(
      (basketItem) => basketItem.cartComponents.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Si el componente ya existe en el carrito, actualizar la cantidad
      const existingItem = basket.basketItems[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      const updatedCart = {
        basketItems: [
          ...basket.basketItems.slice(0, existingItemIndex),
          updatedItem,
          ...basket.basketItems.slice(existingItemIndex + 1),
        ],
      };

      setBasket(updatedCart);
    } else {
      // Si el componente no existe en el carrito, agregar un nuevo elemento
      const newBasketItem: basketItem = {
        cartComponents: item,
        quantity: 1,
      };

      const newCart: basket = {
        basketItems: [...basket.basketItems, newBasketItem],
      };

      setBasket(newCart);
    }
  };

  const onSearch = (searchText: string) => {
    if (components.length === 0) {
      setComponents(DashboardCardTitles);
    } else {
      setComponents(
        DashboardCardTitles.filter((item) =>
          item.nombre.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar onSearch={onSearch} handleDrawer={handleDrawer} />
      <div className="flex flex-row justify-between ">
        {isOpen && <DrawerNavigation handleDrawer={handleDrawer} />}
        <div className="flex flex-wrap justify-center max-h-36">
          {components.slice(0, 12).map((item: componente, index: number) => (
            <Card onClick={addTocart} {...item} key={index} />
          ))}
        </div>
        {/* rigth checkout panel */}
        {basket.basketItems.length > 0 && (
          <SidePanel setCart={setBasket} basket={basket} />
        )}
      </div>
    </>
  );
}
