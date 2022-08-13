export interface Todo {
  id: string
  title: string
  completed?: boolean
}

export const getTodos = (): Promise<Todo[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const response = [
        {
          id: '1',
          title: 'Go shopping',
        },
        {
          id: '2',
          title: 'Job interview',
        },
        {
          id: '3',
          title: 'Prepare homework',
        },
      ]
      resolve(response)
    }, 1000)
  })
}
