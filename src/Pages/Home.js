import React from "react";
import Info from "../Components/Info/Info";
import MarketPlace from "../Components/MarketPlace/MarketPlace";
import Services from "../Components/Services/Services";
import FiverrBusiness from "../Components/FiverrBusiness";
import Banner from "../Components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Info />
      <MarketPlace />
      <FiverrBusiness />
    </div>
  );
};

export default Home;
