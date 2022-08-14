import { NavLink } from 'react-router-dom'

// Constants
const HOME = 'See my todos'
const AddTodo = 'Add new todos'

const NavigationBar = () => {
  return (
    <nav className='navbar sticky-top bg-dark shadow-lg p-0'>
      <div className='container-fluid mx-5'>
        <a className='d-flex flex-row navbar-brand'>
          <NavLink to='/' style={{ color: '#F6F6F6', textDecoration: 'none' }}>
            <button type='button' className='btn btn-dark rounded-pill'>
              <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                <path d='M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z'/>
                <path d='m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z'/>
              </svg>
            </button>
          </NavLink>
        </a>
        <div className='nav'>
          <NavLink to='/'>
            <button type='button' className='btn btn-dark rounded-pill'>
              { HOME }
            </button>
          </NavLink>
          <NavLink to='/addTodo'>
            <button type='button' className='btn btn-dark rounded-pill'>
              { AddTodo }
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar