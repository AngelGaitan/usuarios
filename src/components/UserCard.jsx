
const UserCard = ({user}) => {
  return (
   <article>
    <h2>{`${user.first_name} ${user.last_name}`}</h2>
    <hr />
    <ul>
        <li>
            <span>Email</span>
            <span>{user.email}</span>
        </li>
        <li>
            <span>Birthday</span>
            <span>{user.birthday}</span>
        </li>
    </ul>
    <footer>
        <button>trash</button>
        <button>edit</button>
    </footer>
   </article>
  )
}

export default UserCard