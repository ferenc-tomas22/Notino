import React from 'react'
import { AppContext } from './AppContext'
import { Todo } from './getTodos'

const SingleTodo = (props: { todo: Todo }) => {
  const { todos, setTodos } = React.useContext(AppContext)
  
  const onTodoClick = (id: string) => {
    const newTodos = [ ...todos ]
    const index = newTodos.findIndex(todo => todo.id === id)
    if (index > -1) {
      newTodos[ index ].completed = !newTodos[ index ]?.completed ?? true
      setTodos(newTodos)
    }
  }

  return (
    <li
      className='list-group-item btn btn-light d-flex align-items-center justify-content-between my-2 px-5'
      onClick={ () => onTodoClick(props.todo.id) }
    >
      { props.todo.title }
      <span className={ `badge ${ props.todo?.completed ? 'bg-success' : 'bg-warning' } rounded-pill ms-5` }>
        {
          props.todo?.completed ? (
            <div className='mt-1 px-2'>
              Completed
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='mb-1'
                viewBox='0 0 16 16'
              >
                <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'/>
              </svg>
            </div>
          ) : <div className='my-2 px-4'>Just Do It</div>
        }
      </span>
    </li>
  )
}

export default SingleTodo