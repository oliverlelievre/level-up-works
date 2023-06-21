import React from "react";
import HomePageMain from "../components/Home/HomePageMain";
import FooterPaged from "../components/Navigation/Footer/FooterPaged";
import Navbar from "../components/Navigation/NavBar/NavigationPaged";
import NavigationPaged from "../components/Navigation/NavBar/NavigationPaged";

const Home = () => {
  return (
    <>
      <NavigationPaged />
      <HomePageMain />
      <FooterPaged />
    </>
  );
};

export default Home;
