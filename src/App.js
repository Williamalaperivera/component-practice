import logo from './logo.svg';
import './App.css';
import { Mycomponent } from './componentes/Mycomponent';
import { SecondComponent } from './componentes/SecondComponent';
import { ThirdComponent } from './componentes/ThirdComponent';
import { useState } from 'react';
import { Child } from './componentes/Child';
import { FourthComponent } from './componentes/FourthComponent';

function App() {

  const [name, setName] = useState("Lina");
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  }

 const medicalRecord ={
    height:"160",
    sangre: "RHO+",
    allegies: "none",
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <div>
          <hr />
          <FourthComponent />
          <hr />
        </div>
         
        <h1>mensaje del hijo</h1>
        <p>{ message }</p>
        <Child name={name} setName={setName} addMessage={addMessage}/>
        <hr/>


        <ThirdComponent 
          name= "William"
          lastName= "Alape Rivera"
          card= {medicalRecord} />

        <SecondComponent />
        <Mycomponent/>
        

      </header>
    </div>
  );
}

export default App;
