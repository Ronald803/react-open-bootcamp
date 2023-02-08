import {BrowserRouter as Router, Route, Routes,Link,Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskListComponents from './components/container/task_list';
import TasksDetailPage from './pages/tasks/TasksDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {
  let logged = false;
  let taskList = [
    {
      id: 1,
      name: "Task numero1",
      description: "My fist task"
    },
    {
      id: 2,
      name: "Task numero 2",
      description: "My second task"
    },
    {
      id: 1,
      name: "Task numero 3",
      description: "My third task"
    }
  ]
  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged?', logged)
  },[]);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/any404'>| Not existing route |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>
        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage/> }/>
            <Route exact path='/online-state' element={<StatePage/>}/>
            <Route path='/login' element={
              logged ?
              <Navigate to='/'/>
              :
              <LoginPage/>
            }/>
            <Route exact path='/about' element={ <AboutPage/> }/>
            <Route exact path='/faqs' element={ <AboutPage/> }/>
            <Route  exact path='/profile' element={
                logged ?
                <ProfilePage/>
                :
                //alert('You must be logged in. Redirecting to home...')
                <Navigate to='/login' />
              }/> 
            <Route path='/tasks' element={<TaskListComponents/>}/>
            <Route path='/task/:id' element={<TasksDetailPage/>}/>
            {/* <Route 
              exact 
              path='/task/:id' 
              render = {
                ({match})=>(<TasksDetailPage task={taskList[match.params.id-1]}/>)
              }
              >
            </Route> */}
            {/* 404 Page not found */}
            <Route path='*' element={ <NotFoundPage/> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default AppRoutingOne;
