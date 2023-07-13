// import logo from './logo.svg';
// import './App.css';

import "./style/styles.css"
// import Home from "./components/Home"
// import Counter from "./components/Counter";
// import CounterTwo from "./components/Counter2";
// import Name from "./components/Name";
import Names2 from "./components/Names2";
import Students from './data/students'

// import Data from "./data/data";

function App() {

  // const newCount = Data.map((data)=>{

  //   return <CounterTwo {...data}/>

  // }) 

  // const items = ['laptop','desktop','smartphones','keyboards','headphones']

  // const newItems = items.map((items)=>{

  //   return items

  // })

  const newNames = Students.map((names)=>{

    return names

  })


  return (

    <div>
      <Names2 {...newNames}/>

      {/* <Name/> */}

      {/* <Home/> */}

      {/* <Counter/> */}

      {/* {newCount} */}

    </div>
    
  );
}

export default App;
