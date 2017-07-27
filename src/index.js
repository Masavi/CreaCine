import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Home from './containers/Home';
import Footer from './components/Footer'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

  <div className="page-flexbox-wrapper">
    <header>
      <Header />
    </header>

    <main>
      <Home />
    </main>

    <footer>
      <Footer />
    </footer>
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
