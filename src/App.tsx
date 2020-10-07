import React from 'react'

import { Provider as ReduxProvider } from "react-redux"
import store from './store'

import {Provider as ReduxSocketProvider} from '@mung-office/redux-socket'
import socket from './socket'

import ChatComponent from './components/chat'
  

function App() {

  return (
    <div className="App">
      <ReduxProvider store={store}>
        <ReduxSocketProvider store={store} socket={socket}>
          <ChatComponent />
        </ReduxSocketProvider>
      </ReduxProvider>
    </div>
  );
}

export default App;
