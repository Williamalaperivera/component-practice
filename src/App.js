import logo from './logo.svg';
import './App.css';
import { Mycomponent } from './componentes/Mycomponent';
import { SecondComponent } from './componentes/SecondComponent';
import { ThirdComponent } from './componentes/ThirdComponent';

function App() {
  const medicalRecord ={
    height:"160",
    sangre: "RHO+",
    allegries: "none",
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
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
