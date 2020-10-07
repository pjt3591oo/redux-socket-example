import { Socket, Decorators } from '@mung-office/redux-socket'
import { onAddChat } from '../store/modules/chat'

class S extends Socket {
  constructor(host: string) {
    super(host)
  }

  @Decorators.listener()
  public receive(socket, store) {
    socket.on('/msg', (data) => {
      console.log(data)
      store.dispatch(onAddChat(data))
    })
  }

  public send(payload) {
    let socket = super.getSocket()
    let store = super.getStore()
    
    console.log(store)
    socket.emit('/msg', payload)  
  }

}
let s = new S("ws://localhost:4000")

export default s
