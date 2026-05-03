import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { setSearch,setSort } from "../Redux/Action";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 shadow">

      <NavLink className="navbar-brand fw-bold fs-4" to="/">
         Hotal Silver Spring
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav mx-auto">

          <li className="nav-item">
            <NavLink to="/" className="nav-link">Rooms</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/book" className="nav-link">Book Room</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/reservations" className="nav-link">Reservations</NavLink>
          </li>

        </ul>

        <div className="d-flex align-items-center gap-2">

         
          <input
            type="text"
            className="form-control"
            placeholder="Search rooms..."
            style={{ width: "180px" }}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <select
            className="form-select"
            style={{ width: "150px" }}
            onChange={(e) => dispatch(setSort(e.target.value))}
          >
            <option value="">Sort</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>

          <NavLink to="/login" className="btn btn-outline-light">
            Login
          </NavLink>

          <NavLink to="/signup" className="btn btn-warning fw-bold">
            Signup
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;