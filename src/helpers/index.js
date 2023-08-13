export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;
  /*   
    Europeo 30%
    Americano 15%
    Asiatico 5% 
  */
  switch (marca) {
    case "1":
      incremento = 1.3;
      break;
    case "2":
      incremento = 1.15;
      break;
    case "3":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

export function calcularPlan(plan) {
  /* Basico incrementa 20%
    Completo incrementa 50% 
    */
   return plan === "1" ? 1.2 : 1.5;
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("es-ES", {
    style:"currency",
    currency:'EUR'
  })
}