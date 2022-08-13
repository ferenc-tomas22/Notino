import React from 'react'
import { AppContext } from './AppContext'
import { Todo } from './getTodos'

const SingleTodo = (props: { todo: Todo }) => {
  const { todos, setTodos } = React.useContext(AppContext)
  
  const itemClick = (id: string) => {
    const newTodos = [ ...todos ]
    const index = newTodos.findIndex(todo => todo.id === id)
    if (index > -1) {
      newTodos[ index ].completed = !newTodos[ index ]?.completed
    }
    setTodos(newTodos)
  }

  return (
    <li
      className='list-group-item btn d-flex align-items-center justify-content-between px-5'
      onClick={ () => itemClick(props.todo.id) }
    >
      { props.todo.title }
      <span className='badge bg-success rounded-pill ms-5'>{ props.todo?.completed ? 'Completed' : 'TODO' }</span>
    </li>
  )
}

export default SingleTodo