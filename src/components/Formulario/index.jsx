import { useState } from "react";
import "./formulario.css";

const Formulario = () => {
  let [nome, setNome] = useState("");
  let [altura, setAltura] = useState(0);
  let [peso, setPeso] = useState(0);
  let [resposta, setResposta] = useState(null);

  const values = [
    { value: 17, mensagem: "muito abaixo do peso" },
    { value: 18.5, mensagem: "abaixo do peso" },
    { value: 24.9, mensagem: "peso normal" },
    { value: 29.9, mensagem: "acima do peso" },
    { value: 34.9, mensagem: "obesidade I" },
    { value: 39.9, mensagem: "obesidade II severa" },
    { value: 40, mensagem: "obesidade III mórbida" },
  ];

  let indice = 0;
  let lastindice = values.length - 1;

  const alteraNome = (evento) => {
    setNome(evento.target.value);
  };

  const apresentaResultado = () => {
    const alturaQuadrado = altura ^ 2;
    const totalPeso = peso;
    const IMC = totalPeso / alturaQuadrado;

    for (let i = 0; i < 7; i++) {
      if (IMC <= values[0].value) break;
      else if (IMC >= values[lastindice].value) {
        indice = lastindice;
        break;
      } else if (IMC >= values[i].value && IMC < values[i + 1].value) {
        indice = i;
        break;
      }
    }

    setResposta(values[indice].mensagem);
  };

  return (
    <form className="formulario">
      <input
        className="name"
        type="text"
        placeholder="Digite seu nome"
        required
        onChange={alteraNome}
      />
      <input
        className="dados"
        type="number"
        placeholder="Sua altura"
        required
        onChange={(evento) => setAltura(parseInt(evento.target.value))}
      />
      <input
        className="dados"
        type="number"
        placeholder="Seu peso"
        required
        onChange={(evento) => setPeso(parseInt(evento.target.value))}
      />
      <input className="resposta" type="text" value={resposta} />
      {<button onClick={apresentaResultado}>Calcular</button>}
      {resposta ? (
        <h1>
          {nome}, de acordo com o cálculo do <span>I</span>ndice de{" "}
          <span>M</span>assa <span>C</span>orporal, o resultado significa que
          sua proporção de peso para altura indica que você está{" "}
          <span>{resposta}</span>. <br /> <br /> É importante lembrar que o IMC
          é apenas uma ferramenta de avaliação e deve ser interpretado em
          conjunto com outros fatores de saúde, como idade, sexo e histórico
          médico.
        </h1>
      ) : null}
    </form>
  );
};

export default Formulario;
