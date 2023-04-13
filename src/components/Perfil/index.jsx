import "./perfil.css";

const Perfil = ({ endereco, nome }) => {
  return (
    <div className="container">
      <img
        className="perfil-avatar"
        src={endereco}
        alt="imagem do perfil do github"
      />
      <h3 className="perfil-titulo">{nome}</h3>
      <h5>O seu Developer_"Nutri"</h5>
      <h6>Calcule o seu Indice de Massa Corporal</h6>
    </div>
  );
};

export default Perfil;
