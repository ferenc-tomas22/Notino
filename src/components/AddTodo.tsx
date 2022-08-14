import React from 'react'

const AddTodo = () => {
  const [ title, setTitle ] = React.useState('')

  const addNewToDo = () => {
    if (title.length > 0) {
      // PREVIEW API POST FOR CREATE NEW TO DO
      //--------------------------------------
      // try {
      //   fetch('/api/todos', {
      //     method: 'POST',
      //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ title })
      //   })
      // } catch (err) {
      //   console.error('Something went wrong..')
      // }
      alert('YOUR NEW TO DO WAS ADDED')
    } else {
      alert('PLEASE ENTER A TITLE')
    }
  }
  
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <textarea
            rows={ 3 }
            className='form-control shadow-sm'
            placeholder='Add a description of what not to forget.'
            value={ title }
            onChange={ e => setTitle(e.target.value) }
          />
          <div className='text-end'>
            <button
              type='button'
              className='btn btn-outline-dark rounded-pill shadow mt-3 px-5'
              onClick={ addNewToDo }
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo