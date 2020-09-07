import React from 'react';
import './App.css';
import Avtor from './component/avtor/avtor';
import MainContainer from './component/main/mainContainer';
import {HashRouter,Route,Redirect} from 'react-router-dom';
import LoginContainer from './component/login/loginContainer';
import NavbarContainer from './component/navbar/navbarContainer';


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Redirect to="/main"/>
      <NavbarContainer/>
      <Route path="/avtor" render={() =>  <Avtor/>}/>
      <Route path="/main" render={() =>  <MainContainer/>}/>
      <Route path="/login" render={() =>  <LoginContainer/>}/>
      </HashRouter>
    </div>
  );
}

export default App;
