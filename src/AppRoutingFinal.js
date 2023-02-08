import {BrowserRouter as Router, Route, Routes,Link,Navigate} from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashBoard from './pages/dashboard/DashBoard';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';


const AppRoutingFinal = () => {
  let loggedIn = window.sessionStorage.getItem('loggeado')
  return (
    <Router>
      <aside>
          <Link to='/dashboard'>|| DASHBOARD |</Link>
          <Link to='/task'>| TASKS |</Link>
          <Link to='/login'>| LOGIN |</Link>
          <Link to='/register'>| REGISTER ||</Link>
      </aside>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path='/' element={
          loggedIn ?
            <Navigate to='/dashboard'/>
            :
            <Navigate to='/login'/>
        }/>
        {/* Login Route */}
        <Route exact path='/login' element={<LoginPage/>}/>
        {/* DashBoard Rooute */}
        <Route exact path='/dashboard' element=
          {
            loggedIn ?
            (<DashBoard/>)
            :
            (<Navigate from='/' to='/login'/>)
          }/>
        {/* Task Rooute */}
        <Route exact path='/task' element=
          {
            loggedIn ?
            (<TaskPage/>)
            :
            (<Navigate to='/login'/>)
          }/>  
        <Route exact path='/register' element={<RegisterPage/>} />
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
