import React from "react";
import Services from "./Services/Services";
import Banner from "./Banner/Banner";
import Searchtab from "./SearchTab/Searchtab";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Searchtab></Searchtab>
    </div>
  );
};

export default Home;
