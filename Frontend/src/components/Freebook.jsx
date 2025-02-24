import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");
        console.log("API Response:", res.data); // Log entire response
        const data = res.data.filter((book) => book.category === "Free");
        console.log("Filtered Books:", data);
        setBook(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBook();
  }, []);
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
          Discover a world of knowledge with our Free Books
           Collection! Explore a variety of genres, from thrilling
            mysteries to insightful self-help guides—absolutely free.
             Start your reading journey today and fuel your mind without limits! 🚀📚
          </p>
        </div>

        <div>
        <Slider {...settings}>
  {book.length > 0 ? (
    book.map((item) => {
      console.log("Rendering Item:", item);
      return <Cards item={item} key={item.id} />;
    })
  ) : (
    <p>No free books available</p>
  )}
</Slider>

        </div>
      </div>
    </>
  );
}
export default Freebook;
