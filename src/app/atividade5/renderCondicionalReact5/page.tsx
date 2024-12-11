"use client"

// tipagem das variaveis
type Lista = {
  nome: string;
  disponivel: boolean;
};

// função que retornará o item dentro da estrutura do export
// junto da condicional definida
// também é possivel reatribuir a renderização a partir de concatenação de variáveis
function Filme({ nome, disponivel }: Lista) {

  // a variável precisa ser 'let' pois 'const' não podem ser reatribuídas
  // esse método no doc oficial do React é informado como mais verboso
  let itemConteudo = nome;

  if (disponivel) {
    itemConteudo = nome + " ✅";
  }
  return (
    <li>
      {itemConteudo}
    </li>
  );

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





