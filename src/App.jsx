import AppSeguro from "./components/AppSeguro";
import { CotizadorProvider } from "./context/CotizadorProvider";
/* El provider rodea multiples componentes y permite tener un estado
      compartido */
function App() {
  return (
    <>
      <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider>
    </>
  );
}

export default App;
