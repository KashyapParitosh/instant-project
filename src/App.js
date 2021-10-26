
import './App.css';
import { Component } from 'react';
import CC from './component/Class'
import FC from './component/Func'

class App extends Component {
  state = {
    cvar: false,
    fvar: false
  }

  render() {
    return(
      <div className="App">
        <h1 className="heading">Styling using Functional Component and Class Component</h1>

        <button onClick={()=> {
          if(this.state.cvar===false){
            this.setState({ cvar: true })
          }
          if(this.state.cvar===true){
            this.setState({ cvar: false })
          }
        }}>CLASS COMP</button>


        <button onClick={()=> {
          if(this.state.fvar===false){
            this.setState({ fvar: true })
          }
          if(this.state.fvar===true){
            this.setState({ fvar: false })
          }
        }}>FUNC COMP</button>
        
        <div className="flex">
          <div style={{ display: this.state.cvar ? "block" : 'none' }}><CC /></div>
          <div style={{ display: this.state.fvar ? "block" : 'none' }}><FC /></div>
        </div>
      </div>
    );
  }
}
export default App;




























// kachra
// class ClassComponent extends Component {
//   render() {
//     return (
//       <div className="CC">
//         <h1>Class based COPONENT</h1>
//         <p>Its a class based component data </p>
//       </div>
//     );
//   }
// }

// function Functioncomponent() {
//   return (
//     <div className="FC">
//       <h1>Function based COPONENT</h1>
//       <p>CLICK HERE TOO SEE MORE</p>
//       <p>Its a function based component data </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <>
//         <h1 className="heading">Styling using Functional Component and Class Component</h1>
//         <div className="boxs">
//           <ClassComponent></ClassComponent>
//           <Functioncomponent></Functioncomponent>
//         </div>
//       </>
//     </div>
//   );
// }