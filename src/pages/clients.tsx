import React, { useState } from "react";

const clients = () => {
  interface item {
    name: string;
    age: string;
    email: string;
  }
  interface client extends Array<item> {}

  const [Clientes, setClientes] = useState<client>([]);

  const guardar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientes([
      { name: e.target.value, age: e.target.value, email: e.target.value },
    ]);
  };
  return (
    <div>
      <a
        href="/forms/createform"
        className="font-medium text-blue-500 hover:text-blue-400"
      >
        <button>Crear</button>
      </a>

      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>age</th>
            <th>email</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <>
            {Clientes.map((a, index) => (
              <tr key={index}>
                <td>{a.name}</td>
                <td>{a.age}</td>
                <td>{a.email}</td>
                <td>
                  <button>Actualizar</button>
                </td>
                <td>
                  <button>Eliminar</button>
                </td>
                <td>
                  <button>Ver</button>
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default clients;
