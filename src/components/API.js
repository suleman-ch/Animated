import React, {Component} from 'react'

class API extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            password: '' 
        };
      }
      mySubmitHandler = async (event) => {
        event.preventDefault();
        const formElem = new FormData();
        formElem.append('name', this.state.name);
        formElem.append('password', this.state.password);
        formElem.append('email', this.state.email);
        try{
            let result = await fetch('http://g7technologies.com/testapi.php', {
                method: 'POST',
                mode: 'no-cors',
                header:{
                    'Accept': 'applications/json',
                    'Content-type': 'applications/json',
                },
                body:formElem
            }).then((response) => response.json())
            .then((responseJson) => {
            console.log(responseJson);
             
            }).catch((error) =>{
              console.log(error);
            });
            console.log(result)
        } catch(e) {
            alert('error '+e)
        }
        
      }

      Namehandler = (event) => {
        this.setState({name: event.target.value});
      }

      Passwordhandler = (event) => {
        this.setState({password: event.target.value});
      }

      Emailhandler = (event) => {
        this.setState({email: event.target.value});
      }

    render(){
        return(
            <form encType='form-data' method='POST' action='' onSubmit={this.mySubmitHandler}>
                <input type="text" name="name" value={this.state.name} onChange={this.Namehandler}/>
                <input type="text" name="password" value={this.state.password} onChange={this.Passwordhandler}/>
                <input type="text" name="email" value={this.state.email} onChange={this.Emailhandler}/>
                <input type="submit"/>
            </form>
        )
    }
}
export default API;