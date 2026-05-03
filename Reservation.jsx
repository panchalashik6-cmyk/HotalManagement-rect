import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReservation } from "../Redux/Action";

export default function Reservation() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addReservation({
        name,
        room,
        checkIn,
        checkOut
      })
    );

    setName("");
    setRoom("");
    setCheckIn("");
    setCheckOut("");
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow rounded-4">
        <h2 className="text-center mb-3">Book Room</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="form-control mb-3"
            placeholder="Room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />

          <label>Check-In Date</label>
          <input
            type="date"
            className="form-control mb-3"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />

          <label>Check-Out Date</label>
          <input
            type="date"
            className="form-control mb-3"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />

          <button className="btn btn-success w-100">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}