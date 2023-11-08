import React from "react";
import Reviews from "../../Components/Reviews/Reviews";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-60">
        <a target="_blank" href="https://hasanshahriar32.github.io/devhive">
          <button className="btn btn-xl btn-secondary btn-outline">
            Visit The Documentation
          </button>
        </a>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default About;
