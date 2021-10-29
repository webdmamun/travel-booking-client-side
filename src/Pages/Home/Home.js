import React from "react";
import Services from "./Services/Services";
import Banner from "./Banner/Banner";
import Searchtab from "./SearchTab/Searchtab";
import Hotels from "./Hotels/Hotels";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Searchtab></Searchtab>
      <Hotels></Hotels>
    </div>
  );
};

export default Home;
