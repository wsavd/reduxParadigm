import React from 'react'
import {connect} from 'react-redux'

const Chat = (props) => {
  console.log('chat', props)
  return(
    <div>
      <h1>Chat</h1>
      {props.todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </div>
  )
}

export default connect(state => {
  return {
    todos: state
  }
})(Chat)