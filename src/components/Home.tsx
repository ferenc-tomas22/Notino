import React from 'react'
import SingleTodo from '../SingleTodo'
import { AppContext } from '../AppContext'
// import { getTodos } from '../getTodos'

const Home = () => {
  const { todos, setTodos } = React.useContext(AppContext)
  const [ loading, setLoading ] = React.useState(false)

  // Get todos from API
  // ------------------
  React.useEffect(() => {
    const controller = new AbortController()
    const getData = async () => {
      setLoading(true)
      try {
        const response = await fetch(process.env.REACT_APP_API_GET_TODOS ?? '', { signal: controller.signal })
        if (response.ok) {
          const data = await response.json()
          if (data.length > 0) {
            setTodos(data)
          }
        } else {
          throw new Error('Something went wrong...')
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    getData()
    return () => controller.abort()
  }, [])

  // Get todos from Promise
  // ----------------------
  // React.useEffect(() => {
  //   let shouldUpdate = true
  //   const getData = async () => {
  //     try {
  //       const response = await getTodos()
  //       if (shouldUpdate && response.length > 0) {
  //         setTodos(response)
  //       }
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   getData()
  //   return () => {
  //     shouldUpdate = false
  //   }
  // }, [])

  return (
    <div className='container'>
      <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
        {
          loading ? (
            <>
              <span>Loading...</span>
              <div className='spinner-border'></div>
            </>
          ) : (
            <ul className='list-group'>
              { todos.map(todo => <SingleTodo key={ todo.id } todo={ todo } />) }
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default Home