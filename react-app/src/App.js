import React, { Component } from 'react';
import Todo from './components/Todo';

class App extends Component {
  render() {
    const todos = [
      {
        id :1,
        name : 'Shuzuhara',
        price : '50$',
        status : true

      },
      {
        id : 2,
        name : 'Yua Mikami',
        price : '20$',
        status : false
      },
      {
        id : 3,
        name : 'Nagatomo',
        price : '25$',
        status : true

      }
     
    ];
    return (
      <div className="App">
        < Todo todos= {todos}  />

      </div>
    );
  }
}

export default App;
