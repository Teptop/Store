import React from "react";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#",
  },
  {
    title: "Blog",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950  ">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4 ">
            <a
              href="#"
              className="
                text-primary font-semibold
                 tracking-widest text-2xl uppercase 
                sm:text-3xl
                "
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto ipsam.
            </p>
            <p className="text-gray-500 mt-4">
              Made with love by altayeb khalifa
            </p>
            <a
              href="#"
              target="-blank"
              className="inline-block bg-primary/90 text-white
            py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit my portfolio
            </a>
          </div>

          {/* Footer Links */}
          <div
            className="col-span-2 grid grid-cols-2 
            sm:grid-cols-3 md:pl-10 px-4 items-center"
          >
            <div>
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="text-gray-600 dark:text-gray-400
                        hover:dark:text-white
                                    hover:text-black
                                    duration-300"
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* second link */}
            <div>
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="text-gray-600 dark:text-gray-400
                        hover:dark:text-white
                                    hover:text-black
                                    duration-300"
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Compant Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto ">
                <h1 className="text-xl font-bold sm:text-left">
                    Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                    <FaMobileAlt/>
                  <p>+91 123456789</p>
                </div>
                {/* social links */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;