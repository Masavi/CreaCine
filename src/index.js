import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Header />
  </div>
  , document.getElementById('root'));
registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Header from './components/Header';
// import registerServiceWorker from './registerServiceWorker';
// import Routes from './routes';
//
// ReactDOM.render(
//   <div>
//     <Header />
//     <Routes />
//   </div>
//   , document.getElementById('root'));
// registerServiceWorker();
