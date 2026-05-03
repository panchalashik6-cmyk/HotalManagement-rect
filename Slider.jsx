import { useEffect, useState } from "react";

export default function Slider() {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Luxury Rooms",
      desc: "Experience comfort and elegance"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Premium Stay",
      desc: "Book your dream room today"
    },
    {
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Best Services",
      desc: "Enjoy world-class hospitality"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid mt-3">
      <div className="position-relative">

        <img
          src={slides[current].img}
          className="w-100 rounded"
          style={{ height: "600px", objectFit: "cover" }}
          alt="slider"
        />

        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h2 className="text-dark">{slides[current].title}</h2>
          <p className="text-primary">{slides[current].desc}</p>
        </div>

      </div>
    </div>
  );
}