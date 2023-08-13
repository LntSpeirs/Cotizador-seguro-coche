/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");

  const handleChangeDatos = (evento) => {
    setDatos({
      ...datos,
      [evento.target.name]: evento.target.value,
    });
  };

  return (
    <>
      <CotizadorContext.Provider
        value={{ datos, handleChangeDatos, error, setError }}
      >
        {children}
      </CotizadorContext.Provider>
    </>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
