import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import BookList from "./components/BookList/BookList";
import Details from "./components/Details/Details";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "login" element = {<Login />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<Details />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </AppProvider>
);

