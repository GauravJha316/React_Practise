import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';
class About extends React.Component{
  constructor(props){
    super(props);
  
  this.state={
    count:0,
    count2:2,
  };
  console.log('Prent constructor')
  }
  componentDidMount(){
    console.log('Parent component did mount')
  }
    render(){
      console.log('Prent render')
      return(
        <div>
           <h1>About page</h1>
           <div>LoggedIn User
               <UserContext.Consumer>
                {/* {(data)=> console.log(data)} */}
                {({loggedInUser})=>(
                  <h1 className='text-xl font-bold'>{loggedInUser}</h1>
                )}
               </UserContext.Consumer>
           </div>
            <h2>Read carefully</h2> 
            <UserClass/> 
        </div>
      )
    }
}
// const About = () => {
//   return (
//     <div>
//         <h1>About page</h1>
//         <h2>Read carefully</h2>  
//         <User  name={"Gaurav Jha (function)"}/> 
//         <UserClass name={"Gaurav Jha"} location={"Jamshedpur"}/> 
//     </div>
//   )
// }

export default About