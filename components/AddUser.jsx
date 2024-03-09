import React from 'react'

class AddUser extends React.Component{
  state ={
    name:"",
    email:"",
    about:"",
  }
 add=(e)=>{
    e.preventDefault()
    if (this.state.name==="" || this.state.email==="" ||this.state.about==="" ) {
      alert(" All field fill")
      return;
    }
      this.props.addContactHandler(this.state)
      this.setState({name:"",email:'',about:""})
  }
  render(){
  return (<>
    <h3>AddUser</h3>
    <form onSubmit={this.add}>
    <label>Name:</label>
    <input type="text"
          name="name"
          value={this.state.name}
          onChange={(e)=>this.setState({name:e.target.value})}
    />
    <label>Email:</label>
    <input type="text"
          name="email"
          value={this.state.email}
          onChange={(e)=>this.setState({email:e.target.value})}
    />
    <label>About:</label>
    <input type="text"
          name="about"
          value={this.state.about}
          onChange={(e)=>this.setState({about:e.target.value})}
    />
    <button type='submit' style={{backgroundColor:'blueviolet'}} >Add</button>
    </form>
    </>
  )}
}

export default AddUser