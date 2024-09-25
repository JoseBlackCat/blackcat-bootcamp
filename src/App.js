import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>Esta es la app del curso de fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color="green" message="Estamos trabajando" />
      <Mensaje color="red" message="en un curso" />
      <Mensaje color="blue" message="de React" />
      <Description />
    </div>
  );
}

export default App;
