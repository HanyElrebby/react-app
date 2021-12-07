import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import AddProduct from "./component/AddProduct";

function App() {
  return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/products" className="navbar-brand">
            Product Manager
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
  );
}



export default App;
