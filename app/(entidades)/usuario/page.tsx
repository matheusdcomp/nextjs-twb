import Tabela from "../../componentes/tabela";

export default function Pagina() {

  const cabecalho = ["Id", "Nome"];
  const usuarios = [
    ["1", "JOAO"],
    ["2", "JOANA"],
    ["3", "MARIA"],
  ];

  return (
    <>
      <h1 className="text-amber-800 font-bold text-3xl">Usuários</h1>
      <Tabela cabecalho={cabecalho} linhas={usuarios} />
    </>
  );

}