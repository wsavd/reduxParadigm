import React from 'react';
import {createStore} from 'redux'
import {todos} from './todos'
import {Provider} from 'react-redux'
import Chat from './components/Chat'

const reducer = (state = todos , action) => {
  return state
}

const store = createStore(reducer)
store.subscribe(() => { console.log(store.getState()) })
window.store = store

const App = () => {
  return(
    <Provider store={store}>
      <div>
        <h1>App</h1>
        <Chat />
      </div>
    </Provider>
  )
}

export default App;