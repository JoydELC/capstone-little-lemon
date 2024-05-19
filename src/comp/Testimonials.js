import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Testimonials() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  const [users, setUsers] = useState([]);

  // Use Effect to fetch user data on component mount
  useEffect(() => {
    getUsers();
  }, []);

  // Function to fetch user data from the API
  const getUsers = () => {
    const url = 'https://random-data-api.com/api/v2/users?response_type=json&size=10';

    // Fetch data and update users state when data is received
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <div className="container-testi">
      <h1>Testimonials :</h1>
      <Slider {...settings}>
      {users.map((user, index) => (
        <div key={index} className="card-test">
          <h2><strong>User :</strong>{user.email}</h2>  
          <img src={user.avatar} alt="avatar" />
          <p>
            Rate:<strong>⭐⭐⭐⭐⭐</strong>
          </p>
          
        </div>
        
      ))}
      </Slider>
    </div>
  );
}

export default Testimonials;