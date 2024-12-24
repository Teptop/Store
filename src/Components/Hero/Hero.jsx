import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";

function Hero({ handelOrderPopup }) {
  const HeroData = [
    {
      id: 1,
      img: Image1,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Headphone",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime esse, sit inventore a, repellat animi facere deserunt eligendi atque nemo nobis, ipsa voluptatum possimus unde reprehenderit beatae perferendis aliquam temporibus.",
    },
    {
      id: 2,
      img: Image2,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Headphone",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime esse, sit inventore a, repellat animi facere deserunt eligendi atque nemo nobis, ipsa voluptatum possimus unde reprehenderit beatae perferendis aliquam temporibus.",
    },
    {
      id: 3,
      img: Image3,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Headphone",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime esse, sit inventore a, repellat animi facere deserunt eligendi atque nemo nobis, ipsa voluptatum possimus unde reprehenderit beatae perferendis aliquam temporibus.",
    },
  ];

  const settings = {
    dots: true, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 500, // Transition speed (ms)
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[650px] hero-bg-color flex justify-center items-center"
      >
        {/* Hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text content section */}
                    <div
                      className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
                sm:text-left order-2 sm:order-1 relative z-10"
                    >
                      <h1
                        // Animation
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        // Animation//
                        className="text-2xl sm:text-6xl
                    lg:text-2xl font-bold"
                      >
                        {data.subtitle}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl sm:text-6xl
                    lg:text-7xl font-bold
                    "
                      >
                        {data.title}
                      </h1>
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl uppercase text-white
                    dark:text-white/5 sm:text-[80px] 
                    md:text-[100px] xl:text-[150px] font-bold
                    "
                      >
                        {data.title2}
                      </h1>
                      <div>
                        {/* Editttttttttttttttttttttttttt */}
                        <button
                          data-aos="fade-up"
                          data-aos-offset="0"
                          data-aos-duration="500"
                          data-aos-delay="500"
                          onClick={handelOrderPopup}
                          className="bg-primary text-white
                        cursor-pointer hover:scale-105 duration-300
                        py-2 px-8 rounded-full relative z-10"
                        >
                          Shop By Category
                        </button>
                      </div>
                    </div>
                    {/* Img section */}
                    <div className="order-1 sm:order-2">
                      <div
                        data-aos="zoom-in"
                        data-aos-once="true"
                        className="relative z-10"
                      >
                        <img
                          src={data.img}
                          alt=""
                          className="w-[300px]  sm:w-[450px] h-[300px] sm:h-[450px]
                         sm:scale-105 lg:scale-110 object-contain
                         mx-auto drop-shadow-2xl relative z-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
