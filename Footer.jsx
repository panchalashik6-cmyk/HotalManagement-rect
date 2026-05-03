export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Hotal Silver Spring</h5>
            <p>
              Experience luxury and comfort with our premium hotel rooms.
              Book your stay easily and enjoy world-class services.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Rooms</a></li>
              <li><a href="/book" className="text-light text-decoration-none">Book Now</a></li>
              <li><a href="/reservations" className="text-light text-decoration-none">Reservations</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact</h5>
            <p>Email: ashik@gmail.com</p>
            <p>Phone: +91 9313575674</p>
            <p>Location: meghraj, India</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}