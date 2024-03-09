import React from 'react'
import UserCard from './UserCard';
const UserList = (props) => {
 
   const deleteUserHandler=(_id)=>{
    props.getUserId(_id)
   }


 const renderList= 
      props.lists.map((item)=>{return(<UserCard item={item} clickHandler={deleteUserHandler}/>)
})

  return (
    <div>
      <div>CONTACTS:{props.lists.length}</div>
  <div >{renderList}</div>  
 
  </div>
  )
}

export default UserList