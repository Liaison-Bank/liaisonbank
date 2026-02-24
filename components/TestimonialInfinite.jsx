"use client";
import { useRef } from "react";

const testimonials = [
  { name: "Client Name", role: "Client Designation", color: "green" },
  { name: "Client Name", role: "Client Designation", color: "blue" },
  { name: "Client Name", role: "Client Designation", color: "orange" },
];

export default function TestimonialInfinite() {
  const sliderRef = useRef(null);

  const handleDotClick = (index) => {
    const slider = sliderRef.current;
    const cardWidth = slider.querySelector(".card").offsetWidth + 30;

    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonial">
  <div className="slider" ref={sliderRef}>
    <div className="track">
      {[...testimonials, ...testimonials].map((item, index) => (
        <div className="card testimonial-card" key={index}>
          <div className={`quote-icon ${item.color}`}>
            ❝
          </div>
          <h4>{item.name}</h4>
          <small>{item.role}</small>
          <div className="stars">★★★★★</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span className="quote-watermark">❞</span>
        </div>
      ))}
    </div>
  </div>

  <div className="dots">
    {testimonials.map((_, index) => (
      <span
        key={index}
        onClick={() => handleDotClick(index)}
        role="button"
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</section>
  );
}