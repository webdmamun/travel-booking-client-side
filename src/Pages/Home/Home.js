import React from "react";
import Services from "./Services/Services";
import Banner from "./Banner/Banner";
// import Searchtab from "./SearchTab/Searchtab";
import Hotels from "./Hotels/Hotels";
import OurWorks from "./OurWorks/OurWorks";
import Destinations from "./Destinations/Destinations";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Hotels></Hotels>
      <OurWorks></OurWorks>
      <Destinations></Destinations>
      {/* <Searchtab></Searchtab> */}
    </div>
  );
};

export default Home;
