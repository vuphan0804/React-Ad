import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor() {
      super();
		// Thuoc tinh data: mot mang rong
      this.state = {
         data: []
      }
      
      // this.setStateHandler = this.setStateHandler.bind(this);
   };
  setStateHandler = () =>{
      const item = "setState..." // Tao ra 1 item moi = setState
      // const myArray = this.state.data.slice(); // Copy state cu
      const myArray = [...this.state.data];
	    myArray.push(item); // Day item moi vao array cu
      this.setState({data: myArray}) // setState data moi cho array
  };

  forceUpdateHandler = () => {
    this.forceUpdate();
 };
 findDomNodeHandler = () => {
  //  Tim the 'myDiv' set color = green
  const myDiv = document.getElementById('myDiv');
  ReactDOM.findDOMNode(myDiv).style.color = 'green';
}
   render() {
      return (
         <div>
           {/* Khi click thi goi function setStateHandler() */}
            <button onClick = {this.setStateHandler}>SET STATE</button>
            {/* In ra du lieu moi */}
            <h4>State Array: {this.state.data}</h4> 
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>
         </div>
      );
   }
}
export default App;