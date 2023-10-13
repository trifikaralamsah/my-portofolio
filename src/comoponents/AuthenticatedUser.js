import React, { useContext } from 'react'
import { UserContext } from '../config/context/User'

const AuthenticatedUser = () => {
  const {user, loading} = useContext(UserContext);
//   console.log('user: ', user);
  
  return (
    <div>
        {
        loading ? <div>Loading...</div>
        :
        <div>{user.name} </div>
        }
    </div>
  )
}

export default AuthenticatedUser