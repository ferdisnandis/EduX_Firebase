import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//Páginas
import Login from './pages/login'
import Cadastrar from './pages/cadastrar'

//Firebase
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './utils/FireBaseConfig/firebaseConfig'



ReactDOM.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Cadastrar />
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
