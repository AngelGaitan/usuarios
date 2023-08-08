
import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import { useState } from 'react'
import Modals from './components/Modals'

function App() {
   const [updateInfo, setUpdateInfo] = useState()
   const [closeForm, setCloseForm] = useState(true)
   const [ succedCreate, setSuccedCreate] = useState(true)
  const [ succedUpdate, setSuccedpdate] = useState(true)
  const [ succedDelete, setSuccedDelete] = useState(true)


  const baseUrl = 'https://users-crud.academlo.tech'
const [users, 
  getAllUsers, 
  createNewUser, 
  deleteUserbyId,
  updateUserbyId] = useFetch(baseUrl, setCloseForm, setSuccedCreate,setSuccedpdate ,setSuccedDelete)

useEffect(() => {
getAllUsers('/users')
},[])

console.log(users)
const handleOpenForm = () => {
setCloseForm(false)
}

  return (
    <div>
    <h1>Users</h1>
    <Modals
    succedCreate={succedCreate}
    succedDelete={succedDelete}
    succedUpdate={succedUpdate}
    setSuccedCreate={setSuccedCreate}
    setSuccedDelete={setSuccedDelete}
    setSuccedpdate={setSuccedpdate}
    />
    <button className='formuser_btn' onClick={handleOpenForm} >Open Form</button>
    <FormUser 
      createNewUser = {createNewUser}
      updateInfo={updateInfo}
      updateUserbyId={updateUserbyId}
      setUpdateInfo={setUpdateInfo}
      closeForm={closeForm}
      setCloseForm={setCloseForm}
    />
    <div className='card-container'>
      {
        users?.map(user => (
          <UserCard
          key={user.id}
          user = {user}
          deleteUserbyId = {deleteUserbyId}
          setUpdateInfo ={setUpdateInfo}
          setCloseForm={setCloseForm}
          />
        ))
      }
    </div>
    </div>
  )
}

export default App
