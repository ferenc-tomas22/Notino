import React from 'react'
import { Todo } from './getTodos'

interface AppContext {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
export const AppContext = React.createContext<AppContext>({
  todos: [],
  setTodos: () => {},
})

export const AppContextProvider = ({ children}: { children: React.ReactNode }) => {
  const [ todos, setTodos ] = React.useState<Todo[]>([])
  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      { children }
    </AppContext.Provider>
  )
}
