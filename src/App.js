import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    person: {
      FullName: "Eya Mohdhi",
      bio: "Crazy-girl",
      profession: "Student",
      imgSrc: logo,
      
    },
   show:false,
   mountingTime:null,
    timeSinceMounting:null

  };
   change=()=>{
    this.setState({show:!this.state.show})
   }
 
   componentDidMount() {
    this.setState({mountingTime:new Date()})

    setInterval(() => {
      const date = new Date();
      this.setState(() => ({
        timeSinceMounting: Math.floor((date - this.state.mountingTime)/1000)
      }));
    }, 1000);
  }

  render()
  {
     return <h2 className='all'>
       <button className='butt' onClick={this.change}>toggle</button>
       {this.state.show ? (
        <div className='body'>
       <p className='name'>{this.state.person.FullName}</p>
      <p className='bioo'>{this.state.person.bio}</p>
      <p className='prof'>{this.state.person.profession}</p>
      
              Time since mounting : {this.state.timeSinceMounting} seconds
           
      </div>
       ): null }
     </h2>
  } 
}
    export default App; 
