// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Board from './App';
// import "../style.css";


// const App = () => {

  
//     return (
//       <div>
//         <h1>Voici le dubut d'un morpion</h1>
//         <Board /> {/* Rendre le composant "Square" */}
        
//       </div>
//     );
//   };

// ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../style.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);