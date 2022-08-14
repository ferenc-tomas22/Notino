import React from 'react'
import { Todo } from './getTodos'

type AppContextType = {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
export const AppContext = React.createContext<AppContextType>({ todos: [], setTodos: () => {} })
export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ todos, setTodos ] = React.useState<Todo[]>([])
  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      { children }
    </AppContext.Provider>
  )
}
