import React, { useState } from "react"
import { useSelector } from "react-redux"
import  { useSocket }  from "@mung-office/redux-socket"

const ChatComponent = (props) => {
  let data:any = useSelector<any>(state => ({
    msgs: state.chat
  }))
 
  let [msg, setMsg] = useState("")
  let socket: any = useSocket()
  
  return (
    <>
      <div>
        <input type="text"
          value={msg}
          onChange={e => setMsg(e.target.value)}
        />
        <button
          onClick={() => socket.send({msg})}
        > 
          전송
        </button>
      </div>
      <ul>
        {data.msgs.map((msg, idx) => (
          <li key={idx}>
            <span>(유저){msg.senderId}: </span>
            <span>(메시지){msg.msg}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ChatComponent