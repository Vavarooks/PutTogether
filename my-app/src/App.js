import './App.css';
import React from 'react';
import List from './componets/List';

function App() {
  const person1 ={
    name: "Jane",
    lastName: "Doe",
    age: 45,
    desc: "Black"
  }
  const person2 ={
    name: "John",
    lastName: "Smith",
    age: 88,
    desc: "Brown"
  }
  return (
    <div className="App">
      <List list ={person1}/>
      <List list ={person2}/>
    </div>
  );
}

export default App;
