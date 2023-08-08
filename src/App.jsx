
import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {
  const baseUrl = 'https://users-crud.academlo.tech/'
const [users, getAllUsers, createNewUser, deleteUserbyId,updateUserbyId] = useFetch(baseUrl)

useEffect(() => {
getAllUsers('/users')
},[])


  return (
    <div>
    <h1>hola</h1>
    <FormUser 
    {
      ...createNewUser = {createNewUser}
    }/>
    <div>
      {
        users?.map(user => (
          <UserCard
          key={user.id}
          user = {user}
          />
        ))
      }
    </div>
    </div>
  )
}

export default App
