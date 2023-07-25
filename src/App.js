// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";

// import "./style/styles.css"
// import Home from "./components/Home"
// import Counter from "./components/Counter";
// import CounterTwo from "./components/Counter2";
// import Name from "./components/Name";
// import Names2 from "./components/Names2";
// import Students from './data/students'

// import Ternary from "./components/Ternary";
// import Profile from "./components/Profile";
// import Profile2 from "./components/Profile2";
// import TestComponent from "./components/Test";
// import Main from "./components2/Main"
// import Home from "./components2/Home"



// list Components 
// import Home from "./List/Home"

// List2 Components
import "./style/list.css"
// import Home from "./Jokes/Home"

// To Do List Components
// import Home from "./TodoList/Home"
// Box2
// import Home from "./Main/Home"

// import Data from "./data/data";

function App() {

  // const newCount = Data.map((data)=>{

  //   return <CounterTwo {...data}/>

  // }) 

  // const items = ['laptop','desktop','smartphones','keyboards','headphones']

  // const newItems = items.map((items)=>{

  //   return items

  // })

  // const newNames = Students.map((names)=>{

  //   return names

  // })

  // const[messages, setMessages] = useState(["A","B"])


  //for first name forms
  const [name, setName] = useState({
    fname:"",
    lname:"",
    course:""

  })

  console.log(name)

  function handleClick(e){

    setName(prevName=>{

      return {...prevName, [e.target.name]: e.target.value}
    })

  }

  return (


    <div>
      <h3>Enter Input</h3>

      <label >First Name:</label>
      <form>
        <input type="text" placeholder="Type your First Name" className="form-control" name="fname" onChange={handleClick}/>
      </form>

      <label>Last Name:</label>
      <form>
        <input type="text" placeholder="Type your Last Name" className="form-control" name="lname"  onChange={handleClick}/>
      </form>
      
      <label>Course & Section</label>
      <form>
        <input type="text" placeholder="Enter Course and Section" className="form-control" name="course"  onChange={handleClick} />
      </form>

      <div>
        <h2>Output</h2>
        <h3>First Name: {name.fname}</h3>
        <h3>Last Name: {name.lname}</h3>
        <h3>Course and Section: {name.course}</h3>
      </div>


      {/* {messages.length === 0 ?
       <h1>Youre all caught up</h1> : <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message" }</h1>} */}
      {/* <Home/> */}

      {/* <Main/> */}
      {/* <TestComponent/> */}
      {/* <Profile2/> */}

      {/* <Profile/> */}
      {/* <Ternary/> */}


      {/* <Names2 {...newNames}/> */}

      {/* <Name/> */}

      {/* <Home/> */}

      {/* <Counter/> */}

      {/* {newCount} */}

    </div>
    
  );
}

export default App;
