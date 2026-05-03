import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Roomdetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const rooms = useSelector(state => state.rooms);

  const room = rooms.find(r => r.id === id);
  return (
    <div className="container mt-4">
      <div className="card p-3">
        <img src={room.image} className="img-fluid" alt="" />

        <h2 className="mt-3">{room.name}</h2>
        <p><b>Price:</b> ₹{room.price}</p>
        <p><b>Type:</b> {room.type}</p>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/book", { state: room })}
        >  Book Now
        </button>
      </div>
    </div>
  );
}