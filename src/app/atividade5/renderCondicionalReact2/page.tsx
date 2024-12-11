"use client"

// tipagem das variaveis
type Lista = {
  nome: string;
  disponivel: boolean;
};

// função que retornará o item dentro da estrutura do export
// é possivel retornar também nessa função um resultado nulo = 'null'
// junto da condicional definida
// funcionamento :
// caso o item Filme esteja com a propriedade "disponível" = 'true', ele retornará o primeiro return
// caso o item não obedeça essa condição ele retornará o segundo return, nesse caso um 'null' (nulo)
function Filme({ nome, disponivel }: Lista) {
  if (disponivel) {
    return <li>{nome}</li>;
  }
  return null;
}

// export realizando uma <section> com o componente Filme efetuando a renderização condicional pré-estabelecida
export default function FilmesEmCatalogo() {
  return (
    <section>
      <h1>Filmes</h1>
      <ul>
        <Filme 
          disponivel={false} 
          nome="Interestelar" 
        />
        <Filme 
          disponivel={true} 
          nome="Guardiões da galáxia" 
        />
        <Filme 
          disponivel={true} 
          nome="Star wars" 
        />
      </ul>
    </section>
  );
}





