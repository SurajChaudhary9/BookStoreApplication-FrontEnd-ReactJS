import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserRegistration from './components/UserRegistration';
import Signin from './components/Signin';
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact';
import ResetPassword from './components/ResetPassword';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import AddBook from './components/AddBook';
import Book from './components/Book';

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
         <Route exact path='/forgot' component={ForgotPassword}></Route>
          <Route exact path='/resetpass' component={ResetPassword}></Route>
          <Route exact path='/signin' component={Signin}></Route>
         <Route exact path='/contact' component={Contact}></Route>
         <Route exact path='/addbook' component={AddBook}></Route>
         <Route exact path='/books' component={Book}></Route>
       </Switch>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
