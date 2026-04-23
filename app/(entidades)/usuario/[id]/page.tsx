export default function Usuario({
  params
}: {
  params: Promise<{ id: string }>
}) {

  const id = params.then(p => p.id);

  return (
    <div>
      <h1>Usuário {id}</h1>
    </div>
  );
}