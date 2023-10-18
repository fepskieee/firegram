import PropTypes from 'prop-types'

const Card = () => {
  const arr = [1,2,3];

  return (
    <li>
      <img
        src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1304"
        className="max-h-80 w-full mx-auto sm:max-w-screen-sm object-cover shadow-md shadow-slate-700"
        width="500"
        height="500"
      />
    </li>
  )
}

export default Card