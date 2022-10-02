import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Info from "./Info";
import Contact from "./Contact";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
          <HashRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<Info/>} />
                  <Route path="/contact" element={<Contact/>} />
              </Routes>
          </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
