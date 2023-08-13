/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  calcularMarca,
  calcularPlan,
  formatearDinero,
  obtenerDiferenciaYear,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = (evento) => {
    setDatos({
      ...datos,
      [evento.target.name]: evento.target.value,
    });
  };

  const cotizarSeguro = () => {
    console.log("Cotizando...");
    //Una base
    let resultado = 2000;

    //Obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);

    //Hay que restar el 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;
    resultado *= calcularMarca(datos.marca);
    resultado *= calcularPlan(datos.plan);

    //redondear
    //resultado = resultado.toFixed(2)

    resultado = formatearDinero(resultado);

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  return (
    <>
      <CotizadorContext.Provider
        value={{
          datos,
          handleChangeDatos,
          error,
          setError,
          cotizarSeguro,
          resultado,
          cargando,
        }}
      >
        {children}
      </CotizadorContext.Provider>
    </>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
