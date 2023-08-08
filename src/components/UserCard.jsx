import './styles/UserCard.css'

const UserCard = ({user, deleteUserbyId, setUpdateInfo, setCloseForm}) => {
  
  const handleDelete = () => {
    deleteUserbyId('/users', user.id)
  } 

  const handleUpdate = () => {
    setUpdateInfo(user)
    setCloseForm(false)
  }

    return (
      <article className='card'>
      <h2 className='card-name'>{`${user.first_name} ${user.last_name}`}</h2>
      <hr className='card-line' />

      <ul className='card-list'>
          <li className='card-item'>
              <span className='card-item-label'>Email</span>
              <span className='card-item-value'><i className='bx bx-envelope'></i> {user.email}</span>
          </li>
          <li className='card-item'>
              <span className='card-item-label'>Birthday</span>
              <span className='card-item-value'><i className='bx bx-gift'></i> {user.birthday}</span>
          </li>
      </ul>
      <hr className='card-line' />

      <footer className='card-footer'>
          <button onClick={handleUpdate} className='footer-update'><i className='bx bx-edit-alt'></i></button>
          <button onClick={handleDelete} className='footer-delete'><i class='bx bx-trash-alt' style={{color: '#ffffff'}} ></i></button>
      </footer>
  </article>
  )
}

export default UserCard