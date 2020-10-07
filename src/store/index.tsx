import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import thunk from "redux-thunk"

import {chat} from './modules/chat';

const rootReducer = combineReducers({
  chat
});

const configureStore = () => {
  // const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        // sagaMiddleware
      )
    )
  )

  // sagaMiddleware.run(rootSaga)

  return store
}


// 루트 리듀서를 내보내주세요.
export default configureStore();

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
// export type RootState = ReturnType<typeof rootReducer>;