import React from 'react'
import SingleTodo from './SingleTodo'
export interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}

function App() {
  const [ todos, setTodos ] = React.useState<Todo[]>([])
  const [ loading, setLoading ] = React.useState(false)

  React.useEffect(() => {
    const controller = new AbortController()
    const getTodos = async () => {
      setLoading(true)
      try {
        const response = await fetch(process.env.REACT_APP_API_GET_TODOS ?? '', { signal: controller.signal })
        if (response.ok) {
          const data = await response.json()
          if (data.length > 0) {
            setTodos(data)
          }
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    getTodos()
    return () => controller.abort()
  }, [])

  return (
    <div>
      { todos.map(todo => <SingleTodo todo={todo} /> ) }
    </div>
  )
}

export default App
