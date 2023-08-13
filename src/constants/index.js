export const MARCAS = [
  { id: 1, nombre: "Europeo" },
  { id: 2, nombre: "Americano" },
  { id: 3, nombre: "Asiático" },
];

const MAXYEAR = new Date().getFullYear();
//Array de 20 elementos con los años ordenados por indice
export const YEARS = Array.from(
  new Array(20),
  (valor, index) => MAXYEAR - index
);

export const PLANES = [
  {
    id: "1",
    nombre: "Básico",
    descripcion: "Solo se incluyen las características básicas",
  },
  { id: "2", nombre: "Completo", descripcion: "Se incluye el plan Completo" },
];
