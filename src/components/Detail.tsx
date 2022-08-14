import { NavLink, useParams } from 'react-router-dom'

// Constants
const BACK = 'BACK'

const Detail = () => {
  const { id } = useParams()
  return (
    <div className='container text-center mt-5'>
      <div>
        { `THIS IS TO DO WITH ID ${ id } DETAIL PAGE` }
      </div>
      <div className='text-end mt-5'>
        <NavLink to='/'>
          <button type='button' className='btn btn-outline-dark rounded-pill shadow px-5'>
            { BACK }
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Detail