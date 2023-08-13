import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

/* para evitar tener que escribir esto en todos los demas componentes */

const useCotizador = () => {
  return useContext(CotizadorContext);
};

export default useCotizador;
