import { Fragment } from "react";
import { MARCAS, PLANES, YEARS } from "../constants";
import useCotizador from "../hooks/useCotizador";

const Formulario = () => {
  /* const { modal, setModal } = useContext(CotizadorContext); */

  const { datos, handleChangeDatos } = useCotizador();

  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            MARCA
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(evento) => handleChangeDatos(evento)}
            value={datos.marca}
          >
            <option value="">Seleccione</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            AÑO
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(evento) => handleChangeDatos(evento)}
            value={datos.year}
          >
            <option value="">Seleccione</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(evento) => handleChangeDatos(evento)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
        />
      </form>
    </>
  );
};

export default Formulario;
