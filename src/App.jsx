import './App.css';
import Navbar from './components/Navbar';
import UserRegistration from './components/UserRegistration';
import Signin from './components/Signin';
import About from './components/About';
import Login from './components/Login';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
       <Switch>
        {/* <Navbar/> */}
         <Route exact path='/reg' component={UserRegistration}></Route>
         <Route exact path='/' component={About}></Route>
         <Route exact path='/about' component={About}></Route>
         <Route exact path='/login' component={Login}></Route>
         <Route path='/forgot' component={ForgotPassword}></Route>
         <Route path='/signin' component={Signin}></Route>
       </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
