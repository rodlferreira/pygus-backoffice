import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Login from './Components/Login/LoginContainer';
import Home from './Components/Home/App';
import Cadastro from './Components/Cadastro/CadastroContainer'

ReactDOM.render(
  
  <React.StrictMode>
    
    <BrowserRouter>
    
      <Switch>

        <Route path='/login' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/cadastro' exact component={Cadastro} />

      </Switch>
    
    </BrowserRouter>  

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
