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
import OptionalRender from './components/pure/optionalRender';
import Rectangulo from './ejercicio10-11-12.jsx/Rectangulo';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskFormik from './components/pure/forms/taskFormik';
import AsyncExample from './components/pure/forms/AsyncExample';
import ObservableExample from './components/pure/forms/ObservableExample';
import FetchExample from './services/FetchExample';
import AxiosExample from './components/pure/AxiosExample';
import ChuckNorris from './ejercicios19-20-21/chuckNorris';
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
        
        {/* Ejemplos de renderizado condicional */}
        {/* <OptionalRender></OptionalRender> */}
        {/* <Rectangulo></Rectangulo> */}

        {/* Ejemplos de uso de formik */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
        {/* <TaskFormik></TaskFormik> */}

        {/* Ejemplos de procesos asíncronos */}
        {/* <AsyncExample></AsyncExample> */}

        {/* <ObservableExample></ObservableExample> */}
        {/* <FetchExample></FetchExample> */}
        {/* <AxiosExample></AxiosExample> */}
        <ChuckNorris></ChuckNorris>
        {/* Proyecto Final */}
        {/* <TaskListComponents></TaskListComponents> */}
        {/* <ContactList></ContactList> */}
        {/* <Father></Father> */}
      </header>
    </div>
  );
}


export default App;
