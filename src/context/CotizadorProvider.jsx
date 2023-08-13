/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const handleChangeDatos = (evento) => {
    setDatos({
      ...datos,
      [evento.target.name]: evento.target.value,
    });
  };
  return (
    <>
      <CotizadorContext.Provider value={{ datos, handleChangeDatos }}>
        {children}
      </CotizadorContext.Provider>
    </>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
