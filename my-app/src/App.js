import './App.css';
import React from 'react';
import List from './componets/List';

function App() {
  // const person1 ={
  //   name: "Jane",
  //   lastName: "Doe",
  //   age: 45,
  //   desc: "Black"
  // }
  // const person2 ={
  //   name: "John",
  //   lastName: "Smith",
  //   age: 88,
  //   desc: "Brown"
  // }
  return (
    <div className="App">
      <br/>
      <List lastName={"Doe"} name={"Jane"} age={45} desc={"Black"}/>
      <br/>
      <List lastName={"Smith"} name={"John"} age={88} desc={"Brown"}/>
    </div>
  );
}

export default App;
