import { useForm } from "react-hook-form"

const FormUser = () => {
    
    const {register, reset, handleSubmit} = useForm()
    const submit = () => {
    
    }
    return (

<form onSubmit={handleSubmit(submit)}>
      <h2>New User</h2>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input {...register('first_name')} type="text" id="first_name" />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input {...register('last_name')} type="text" id="last_name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password" />
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input {...register('birthday')} type="date" id="birthday" />
      </div>
      <button>Add a new user</button>
    </form>
  )
}

export default FormUser