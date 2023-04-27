import Image from "next/image";
import React from "react";
import { componente } from "../models/Componente.model";

interface cardProps extends componente {
  onClick: (componente: componente) => void;
}

const Card = ({
  id,
  nombre,
  imagen,
  descripcion,
  precio,
  stock,
  onClick,
}: cardProps) => {
  return (
    <div className="px-3 flex flex-row ">
      <div
        className="shadow-lg  p-2 rounded-lg mt-3 hover:animate-pulse cursor-pointer "
        onClick={() =>
          onClick({ id, nombre, imagen, descripcion, precio, stock })
        }
      >
        <h1 className="text-center font-medium mt-3 text-2xl"> {nombre}</h1>
        <Image src={imagen} alt={descripcion} width={256} height={256} />
        <div className="flex flex-row justify-between">
          <p className="text-center font-normal mt-3 "> {descripcion}</p>
          <p className="text-center font-normal mt-3 "> ${precio}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
