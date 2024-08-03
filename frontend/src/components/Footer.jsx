import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaLocationArrow } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

  return (
    <footer className="Container">
      <hr />
      <div className="content">
        <div>
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <h4>Hours</h4>
          <ul>
            {hours.map((element) => (
              <li key={element.id}>
                <span>{element.day}</span>
                <span>{element.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <FaPhone />
              <span> 7296893074</span>
            </li>
            <li>
              <MdEmail />
              <span> canshsp@gmail.com</span>
            </li>
            <li>
              <FaLocationArrow />
              <span> Jaipur, Rajasthan</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
