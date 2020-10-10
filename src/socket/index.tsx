import { Socket, Decorators } from '@mung-office/redux-socket'
import { onAddChat } from '../store/modules/chat'

class S extends Socket {
  constructor(host: string) {
    super(host)
  }

  @Decorators.listener()
  public receive(socket, store) {
    socket.on('/msg', (data) => {
      store.dispatch(onAddChat({
        msg: data.msg.msg,
        senderId: data.senderId
      }))
    })
  }

  @Decorators.emitter("/msg")
  public send(props) {
    let [socket, store, payload] = props
    console.log(payload)
  }

}
let s = new S("ws://localhost:4000")

export default s
