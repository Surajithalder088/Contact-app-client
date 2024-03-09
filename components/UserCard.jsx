import React from 'react'

const UserCard = (props) => {
    const{_id,name,email,about}=props.item;
  return (
    <div key={_id} style={{border:' 5px solid black',padding:"10px",margin:"10px"}}>
    <h3>{name}</h3>
    <p>{email}</p>
    <h5>{about}</h5>
     <button style={{ color:'blue',margin:'5px'}}>update</button>  
<button style={{color:'red',margin:'5px'}}
        onClick={()=>props.clickHandler(_id)}
>delete</button>
</div>
  )
}

export default UserCard