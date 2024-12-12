"use client"

// tipagem das propriedades do array
type NotificationsArrrayType = {
  id: number,
  name: string,
  message: string,
  view: boolean,
};

// meu json com a data que preciso das mensagens, já implementado com a interface/type respectiva
const notificationsArray: NotificationsArrrayType[] = [{
  id: 0,
  name: 'Lucas',
  message: 'ele me ajudou um monte kkkkk',
  view: true,
}, {
  id: 1,
  name: 'Filipe',
  message: 'Bom dia, tem horario terça feira ?',
  view: false,
}, {
  id: 2,
  name: 'Julia',
  message: 'Oie como você tá ?',
  view: false,
}];

// defini como as propriedades devem ser recebidas pelo Mailbox
type MailboxProps = {
  notificationsArray: NotificationsArrrayType[];
};

// criei a função Mailbox onde vou gerar o return filtrando o array pelas notificações não vizualizadas
// usando do type MailboxProps para passar o array dentro da função da forma correta
function Mailbox({ notificationsArray }: MailboxProps) {
  const unreadMessages = notificationsArray.filter(notificationUnique => !notificationUnique.view);
  return (
    <div>
      <h1>Hello!</h1>
      {/* se unreadMessages for maior que 0, ele retorna uma <div> com um <h2> informando quantas mensagens não foram lidas */}
      {unreadMessages.length > 0 &&
        <div>
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
          {/* Junto disso implementei um '.map' com base no 'json.name' quais pessoas são donas das mensagens não lidas */}
          {unreadMessages.map(notView => <h1 key={notView.id}>
            You haves messages of {notView.name}
          </h1>)}
        </div>}
    </div>
  );
}

// criei o retorno da page para vizualizarmos no site
export default function Messages() {

  return (

    <div>
      <Mailbox notificationsArray={notificationsArray} />
    </div>

  )
}