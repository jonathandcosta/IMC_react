import { useState } from "react";
import "./formulario.css";

const Formulario = () => {
  let [nome, setNome] = useState("");
  let [altura, setAltura] = useState(0);
  let [peso, setPeso] = useState(0);

  const alteraNome = (evento) => {
    setNome(evento.target.value);
  };

  const apresentaResultado = () => {
    const alturaQuadrado = altura * 2;
    const totalPeso = peso;
    const IMC = totalPeso / alturaQuadrado;

    if (IMC <= 25) {
      return (
        <p>
          {nome} você está com o seu peso NORMAL ou um pouco abaixo do ideal,
          procure um Nutricionista.
        </p>
      );
    } else {
      return (
        <p>
          {nome} você está ACIMA do peso ideal, procure um Nutricionista
          qualificado!
        </p>
      );
    }
  };

  return (
    <form className="formulario">
      <input
        className="name"
        type="text"
        placeholder="Insira seu primeiro nome"
        onChange={alteraNome}
      />
      <input
        className="dados"
        type="number"
        placeholder="Insira a sua altura"
        onChange={(evento) => setAltura(parseInt(evento.target.value))}
      />
      <input
        className="dados"
        type="number"
        placeholder="Insira o seu peso atual"
        onChange={(evento) => setPeso(parseInt(evento.target.value))}
      />
      {apresentaResultado()}
    </form>
  );
};

export default Formulario;