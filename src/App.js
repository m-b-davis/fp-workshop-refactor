import React from 'react';
import './App.css';

import {useRoutes, navigate} from 'hookrouter';
import { UsersPage } from './pages/users-page';
import { ValidationsPage } from './pages/validation-page';
import { ApiPage } from './pages/api-page';

 
const routes = {
    '/selectors': () => <UsersPage />,
    '/validations': () => <ValidationsPage />,
    '/api': () => <ApiPage />,
    '/': () => <UsersPage />,
};

function Header() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" onClick={() => navigate('/selectors')}>Test Selectors</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" onClick={() => navigate('/validations')}>Test Validations</a>
      </li>

      <li className="nav-item">
        <a className="nav-link active" onClick={() => navigate('/api')}>Test Api</a>
      </li>
    </ul>
  );
}
    
function App () {
  return (
    <div className="content">
      <Header />
     { useRoutes(routes) }
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

