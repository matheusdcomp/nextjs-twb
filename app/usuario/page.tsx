import { JSX } from "react";

export default function Pagina() {

  const paragrafos: JSX.Element[] = [];
  //const v = [1, 2, 3];  
  //const paragrafos = v.map((i) => <p>{i}</p>);

  for (let i = 0; i < 3; i++) {
    paragrafos.push(<p key={i}>{i}</p>);
  }

  return (
    <>
      <h1>Minha Página</h1>
      {paragrafos}
      <p>dssd</p>
    </>
  );

}