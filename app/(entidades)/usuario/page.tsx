'use client';
import Tabela from "../../componentes/tabela";

export default function Pagina() {

  const cabecalho = ["Id", "Nome"];
  const usuarios = [
    ["1", "JOAO"],
    ["2", "JOANA"],
    ["3", "MARIA"],
  ];

  function cliqueNovoUsuario() {
    usuarios.push(["4", "JOSÉ"]);
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-amber-800 font-bold text-3xl inline-block">Usuários</h1>
        <button
          className="ml-4 bg-amber-700 text-zinc-100 px-2 py-1 rounded hover:bg-amber-900"
          onClick={cliqueNovoUsuario}>
          Novo
        </button>
      </div>
      <Tabela entidade={"usuario"} cabecalho={cabecalho} linhas={usuarios} />
    </>
  );

}