"use client"
import Box from '@mui/material/Box';

// meu json com a data que preciso
const pessoas = [{
  id: 0,
  name: 'Isaac Pedroso Pinheiro',
  profession: 'Engenheiro Civil',
}, {
  id: 1,
  name: 'Luan Milanez Holanda',
  profession: 'Professor',
}, {
  id: 2,
  name: 'Severino Ximenes Saraiva',
  profession: 'Físico',
}, {
  id: 3,
  name: 'Mara Arlia de Carvalho',
  profession: 'Químico',
}, {
  id: 4,
  name: 'Brunna Estellet Gomes',
  profession: 'Professora',
}];

// é possivel criar listas recebendo Json's mais complexos, podendo usar do filter para atribuir uma condição a cada filtragem
// exemplificando melhor, no filtroProfs, o método .filter vai reiterar dentro do array pessoas em busca de um resultado booleano
//                                                                                                        (OU)
// sendo nesse caso, a condição de que iteração atual do pessoa.profession seja igual ou não a 'professor' || 'professora'
// cada iteração que retorna true, é enviada para o novo array chamado filtroProfs
const filtroProfs = pessoas.filter(pessoa => pessoa.profession === 'Professor' || pessoa.profession === 'Professora')

// após isso, usei do método .map para iterar sobre cada item do array filtroProfs
// uma composição que eu desejava dentro de um <Box> simples do MaterialUI
const listaProfs = filtroProfs.map(professor =>
  <Box 
    key={professor.id}
    sx={{
      marginTop: 1,
      p: 2,
      width: 380,
      height: 1,
      borderRadius: 3,
      bgcolor: 'primary.main',
      '&:hover': {
        bgcolor: 'primary.dark',
      },
    }}>
    Nome: {professor.name} ID: {professor.id}
  </Box>)

export default function ListaPessoas() {
  return (

      <ul>
        {listaProfs}
      </ul>

  )
}

// o erro de keys foi resolvido após designar a cada item do array filtroProfs que foi exibido, uma key