"use client"

// tipagem das variaveis
type Lista = {
  nome: string;
  disponivel: boolean;
};

// função que retornará o item dentro da estrutura do export
// junto da condicional definida
function Filme({ nome, disponivel }: Lista) {
  return (
    // nesse exemplo é demonstrado como a escrita da função de renderização condicional pode ser escrita de forma ternária
    // onde você pode ler como 'disponivel ?' , devolve o resultado em boolean 
    // se 'true' renderiza  'nome + ' ✅' ' 
    // se 'false' renderiza apenas ': nome'
    <li>
      {disponivel ? nome + ' ✅' : nome}
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





