import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations,deleteReservation } from "../Redux/Action";

export default function Reservationlist() {
  const dispatch = useDispatch();
  const reservations = useSelector(state => state.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Reservations</h2>

      <div className="row">
        {reservations.map(r => (
          <div key={r.id} className="col-md-4">
            <div className="card shadow-lg border-0 rounded-4 mb-4">
              
              <div className="card-body">
                <h5 className="card-title text-primary">{r.name}</h5>
                
                <p className="card-text">
                  <b>Room:</b> {r.room}
                </p>

                {r.checkIn && (
                  <p className="card-text">
                    <b>Check-In:</b> {r.checkIn}
                  </p>
                )}

                {r.checkOut && (
                  <p className="card-text">
                    <b>Check-Out:</b> {r.checkOut}
                  </p>
                )}

                <button
                  className="btn btn-danger w-100 mt-2"
                  onClick={() => dispatch(deleteReservation(r.id))}
                >
                  Cancel Booking
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}