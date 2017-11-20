import React from 'react';
import {createStore} from 'redux'
import {todos} from './todos'
import {Provider} from 'react-redux'

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
        App
      </div>
    </Provider>
  )
}

export default App;