import Link from "next/link";

export default function Menu() {
  const cssLi = "p-2";
  return (
    <div className="col-span-1 row-span-7 bg-amber-700 text-zinc-200 text-2xl font-bold">
      <ul>
        <Link href={"/"}>
          <li key="menu1" className={cssLi}>Home</li>
        </Link>
        <Link href={"/usuario"}>
          <li key="menu2" className={cssLi}>Usuários</li>
        </Link>
      </ul>
    </div>
  );
}