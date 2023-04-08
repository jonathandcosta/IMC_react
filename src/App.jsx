import Perfil from "./components/Perfil/index";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Perfil
        nome="Jonathan D Costa"
        endereco="https://github.com/jonathandcosta.png"
      />
      <Formulario />
    </>
  );
}

export default App;
