// import logo from './logo.svg';
// import './App.css';

import "./style/styles.css"
// import Home from "./components/Home"
// import Counter from "./components/Counter";
// import CounterTwo from "./components/Counter2";
// import Name from "./components/Name";
import Names2 from "./components/Names2";
// import Data from "./data/data";

function App() {

  // const newCount = Data.map((data)=>{

  //   return <CounterTwo {...data}/>

  // }) 

  const items = ['laptop','desktop','smartphones','keyboards','headphones']

  const newItems = items.map((items)=>{

    return items

  })





  return (

    <div>
      <Names2 {...newItems}/>
      {/* <Name/> */}

      {/* <Home/> */}

      {/* <Counter/> */}

      {/* {newCount} */}

    </div>
    
  );
}

export default App;
