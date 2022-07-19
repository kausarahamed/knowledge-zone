import React from "react";
import heroImg from '../../images/header_image_1.png';

const HeroBanner = () => {
  return (
    <div class="hero min-h-screen bg-gradient-to-r from-[#9504B8] to-[#490774] text-white">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <div className="w-1/2 flex justify-center">
          <img
            src={heroImg} alt=''
            class="max-w-sm  "
          />
        </div>
        <div className="w-1/2 px-12">
          <h1 class="text-5xl font-bold">Welcome to the future of learning</h1>
          <p class="py-6">
            BYJU'S makes learning engaging & effective by leveraging deep
            pedagogy & cutting edge technology. With offerings ranging from
            adaptive self-learning courses on apps & web to personalised 1-on-1
            classes with expert teachers for ages 4-18+, we have programs for
            every learner.
          </p>
          <button class="btn btn-primary">Explore Learning Programs</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
