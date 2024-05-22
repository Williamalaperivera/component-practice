import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { Mycomponent } from './componentes/Mycomponent';
import { SecondComponent } from './componentes/SecondComponent';
import { ThirdComponent } from './componentes/ThirdComponent';

function App() {
  const medicalRecord ={
    height:"160",
    sangre: "RHO+",
    allegries: "none",
  }
=======
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';

function App() {

  const medicalRecord = {
    height: "160",
    bloodGroup: "RhO+",
    allergies: "None"
  }

>>>>>>> 23831e9e0d4112de3304c074c38f8dee0ede394e
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
<<<<<<< HEAD
        <hr/>
        <ThirdComponent 
        name= "William"
        lastName= "Alape Rivera"
        card= {medicalRecord} />

        <SecondComponent />
        <Mycomponent/>
        

=======
        <SecondComponent />
        <ThirdComponent 
          name="Inés"
          lastName="Oliveros"
          card={medicalRecord}
        />
        <MyComponent />
>>>>>>> 23831e9e0d4112de3304c074c38f8dee0ede394e
      </header>
    </div>
  );
}

export default App;
