"use client"

// tipagem das variaveis
type Lista = {
  nome: string;
  disponivel: boolean;
};

// função que retornará o item dentro da estrutura do export
// junto da condicional definida
function Filme({ nome, disponivel }: Lista) {
  // nesse exemplo a função sempre retornará '<li> {nome} </li>'
  // porém só irá retornar o '{disponivel && '✅'}' concatenado CASO o 'disponivel' for 'true'
  // agora se 'disponivel' for 'false', ele retornará '❌' concatenado
    return (
      <li>
        {nome} {disponivel && '✅'} {!disponivel && '❌'}
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





