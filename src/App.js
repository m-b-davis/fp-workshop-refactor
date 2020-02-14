import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useRoutes} from 'hookrouter';
import { UsersPage } from './pages/users-page';
 
const routes = {
    '/users': () => <UsersPage />,
    '/': () => <UsersPage />,
};
    
function App () {
  return (
    <div>

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
