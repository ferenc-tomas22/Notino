import React from 'react'

const AddTodo = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <textarea
            rows={ 3 }
            className='form-control'
            placeholder='Add description for your new todo'
          />
          <div className='text-end'>
            <button type='button' className='btn btn-outline-dark rounded-pill mt-3 px-5'>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTodo