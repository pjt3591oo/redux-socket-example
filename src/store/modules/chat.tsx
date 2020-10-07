type ChatState = {
  msg: string,
  senderId: number
}

const initialState:any = []

const ADD = 'CHAT/ADD'
const LAST_REMOVE = 'CHAT/LAST_REMOVE'

export const onAddChat = (payload: ChatState):any => (dispatch: any) => {
  dispatch({
    type: ADD,
    payload
  })

}
export const onLastRemove = (payload: ChatState):any => (dispatch: any) => {
  dispatch({
    type: LAST_REMOVE
  })
}

type ChatAction =
  | ReturnType<typeof onAddChat>
  | ReturnType<typeof onLastRemove>;

export function chat(
  state: any = initialState,
  action: ChatAction
) {
  let msgs =  [...state]
  switch (action.type) {
   
    case ADD:
      msgs.push(action.payload)
      return msgs
    
    case LAST_REMOVE:
      return msgs.slice(0, msgs.length-1)
    
    default: 
      return state
  }

}
