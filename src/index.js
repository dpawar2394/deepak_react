import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './TodoList';
import Api from '../src/Api/Api';
import reportWebVitals from './reportWebVitals';
import NotesKeep from './notes/NotesKeep';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <NotesKeep/> */}
    {/* <TodoList /> */}
    {/* <App/>  */}
    <Api/>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
