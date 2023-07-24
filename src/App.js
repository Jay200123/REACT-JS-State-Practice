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
import Home from "./Jokes/Home"

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



  return (


    <div>

      {/* {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>} */}
      <Home/>
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
