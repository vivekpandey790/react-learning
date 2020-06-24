import React, { Component } from "react";
import { SearchField} from './components/search/search-field.component'
import { CardList } from './components/card-list/card-list.component';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled:'',
    };
  }
   

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange=(e)=>{
    this.setState({searchFiled:e.target.value})
    }

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase()));
    return (
      <div className="App">
        <div className = 'main-page'>
          <h1>Monsters Cards</h1>
        </div>
        {/* <input  
        type='search'
        placeholder='Search Monsters'
        onChange={e=>
        this.setState({searchFiled:e.target.value}, ()=>console.log(this.state))}
        // /> */}
        <SearchField 
        placeholder='Search Monsters!'
        handleChange={this.handleChange}
        /> 
        <CardList monsters= {filteredMonsters}></CardList>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={() => {this.setState({string : 'Hello Pandey Ji!!!'})}}>Change Text!!</button>
         
        </header> */}
        
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
