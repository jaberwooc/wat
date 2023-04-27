export interface componenteList {
  componentes: componente[];
}

export interface componente {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}
