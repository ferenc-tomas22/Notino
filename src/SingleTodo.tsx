import { Todo } from './App'

const SingleTodo = ({ todo }: { todo: Todo }) => {
  return (
    <div>
      <span><strong>{ todo.title }</strong></span>
      <p>{ todo.completed ? 'Completed' : 'Not completed' }</p>
    </div>
  )
}

export default SingleTodo