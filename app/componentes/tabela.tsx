'use client';

import Link from "next/link";

export default function Tabela({
  entidade,
  cabecalho,
  linhas
}:
  {
    entidade: string,
    cabecalho: string[],
    linhas: string[][]
  }) {

  function selectionarTodos() {
    const checkAll = document.getElementById("checkAll") as HTMLInputElement;
    const checkboxes = document.querySelectorAll("#tabelaCRUD tbody input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    checkboxes.forEach(checkbox => checkbox.checked = checkAll.checked);
  }

  const csstb = "mb-2 w-full border border-cor1 border-collapse";
  const csshd = "bg-amber-700";
  const csstr = "even:bg-amber-200 hover:bg-amber-400";
  const cssth = "border border-zinc-800 text-zinc-100 p-1";
  const csstd = "border border-zinc-800 text-zinc-800 p-1";

  const ths = (
    <tr key={"trcabecalho"} className={csshd}>
      <th key={"thcheck"} className={cssth + "text-center"}>
        <input id="checkAll" type="checkbox" className="w-4 h-4" onChange={selectionarTodos} />
      </th>
      {cabecalho.map((th, i) =>
        <th key={"th" + i} className={cssth}>
          {th.toUpperCase()}
        </th>
      )}
      <th key={"thacoes"} className={cssth + "text-center"}>
        Ações
      </th>
    </tr>
  );

  const trs = linhas.map((tr, i) =>
    <tr key={"tr" + i} className={csstr}>
      <td key={"tdcheck" + i} className={csstd + "text-center"}>
        <input id={"check" + i} type="checkbox" className="w-4 h-4" />
      </td>
      {tr.map((td, j) =>
        <td key={"td" + i + "-" + j} className={csstd}>
          {td.toUpperCase()}
        </td>
      )}
      <td key={"tdacoes" + i} className={csstd + "text-center"}>
        <Link href={`/${entidade}/${i + 1}`}>
          <span className="px-2 py-2">
            ✎
          </span>
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="relative w-full overflow-auto border-collapse">
      <table id="tabelaCRUD" className={csstb}>
        <thead>
          {ths}
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </div>
  );
}