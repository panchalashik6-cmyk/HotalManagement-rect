import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

export default function Roomlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { rooms, search, sort } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  
  let filtered = rooms.filter((room) =>
    room.name.toLowerCase().includes(search.toLowerCase())
  );

 
  if (sort === "low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } 
  else if (sort === "high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container text-center mt-3">
      <h2>Rooms</h2>

      <div className="row">
        {filtered.map((room) => (
          <div key={room.id} className="col-md-3">
            <div
              className="card m-2 p-2"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/room/${room.id}`)}
            >
              <img
                src={room.image}
                className="card-img-top"
                style={{ height: 200, objectFit: "cover" }}
                alt=""
              />
              <div className="card-body">
                <h5>{room.name}</h5>
                <p><strong>Price:</strong> ₹{room.price}</p>
                <p><strong>Room Type:</strong> {room.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}