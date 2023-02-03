import logo from './logo.svg';
//import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponents from './components/container/task_list';
import ComponenteA from './components/container/componenteA';
import GreetingStyled from './components/pure/greetingStyled';
import ClockExercise from './ejercicio456/ClockExercise';
import Father from './components/container/father';
import ContactList from './components/container/contact_list';
//https://gitlab.com/masajo/ob-react/-/commits/main/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Componente greeting*/}
        {/* <Greeting name="Ronald"></Greeting> */}
        {/* <GreetingF name="Ronald"></GreetingF> */}
        {/*Componente de listado de tareas*/}
        {/* <TaskListComponents></TaskListComponents> */}
        {/* <ComponenteA></ComponenteA> */}
        {/* <ClockExercise></ClockExercise> */}
        {/* <GreetingStyled name="Ronico"></GreetingStyled> */}
        {/* <TaskListComponents></TaskListComponents> */}
        <ContactList></ContactList>
        {/* <Father></Father> */}
      </header>
    </div>
  );
}


export default App;
