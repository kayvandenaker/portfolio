import {React, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <Suspense fallback={<h3></h3>}>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </Suspense>,
  document.getElementById('root')
);

