import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[3rem] text-primarytextcolor bg-backgroundcolor">
      <div
        data-aos-offset={-400}
        data-aos="fade-up"
        className="wrapper flex flex-col items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">
          Want to Be Our Next Success Story?
        </div>
        <h2 className="heading-2">
          Let’s turn your boldest ideas into breakthrough solutions.
        </h2>
        <p className="desc max-w-[40rem]">
          Whether you’re launching a product, scaling a team, or solving a
          complex challenge—we’re ready when you are.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Book a Free Discovery Call
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
