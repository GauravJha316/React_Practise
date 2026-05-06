import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
           userInfo:{
            name:"Dummy",
            location:"Default",

           },
        };
    } 
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/GauravJha316");
        const json=await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json)
    }

    render(){
        const{login,location,avatar_url}=this.state.userInfo;
        return(
            <div>
                <img src={avatar_url} />
                <h1>Name:{login}</h1>
                <h2>location:{location}</h2>  

            </div>
        )
    }
}


export default UserClass