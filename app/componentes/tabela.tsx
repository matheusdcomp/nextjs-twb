export default function Tabela({
  cabecalho,
  linhas
}:
  {
    cabecalho: string[],
    linhas: string[][]
  }) {

  const csstb = "mb-2 w-full border border-cor1 border-collapse";
  const csshd = "bg-amber-700";
  const csstr = "even:bg-amber-200 hover:bg-amber-400";
  const cssth = "border border-zinc-800 text-zinc-100 p-1";
  const csstd = "border border-zinc-800 text-zinc-800 p-1";

  const ths = cabecalho.map((th, i) =>
    <th key={"th" + i} className={cssth}>
      {th.toUpperCase()}
    </th>
  );

  const trs = linhas.map((tr, i) =>
    <tr key={"tr" + i} className={csstr}>
      {tr.map((td, i) =>
        <td key={"td" + i} className={csstd}>
          {td.toUpperCase()}
        </td>
      )}
    </tr>
  );

  return (
    <div>
      <table className={csstb}>
        <thead>
          <tr className={csshd}>
            {ths}
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </div>
  );
}