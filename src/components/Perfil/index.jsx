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
      <h6>O seu Developer_Nutri</h6>
    </div>
  );
};

export default Perfil;
