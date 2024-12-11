"use client"

// meu json com a data que preciso
const pessoas = [
  'Isaac Pedroso Pinheiro : Engenheiro Civil',
  'Luan Milanez Holanda: Programador',
  'Severino Ximenes Saraiva: Físico',
  'Mara Arlia de Carvalho: Químico',
  'Brunna Estellet Gomes: Professora'
];

// por cada 'item' (nesse caso pessoa), vou iterar esse wrapper <li> retornando pela arrow function um novo array (liPessoas)
const liPessoas = pessoas.map(pessoas => <li>{pessoas}</li>);

export default function ListaPessoas() {
  return (

    <ul>
      {liPessoas}
    </ul>

  )
}

// o erro de key informado pelo console vai ser resolvido nos próximo exemplos de listas