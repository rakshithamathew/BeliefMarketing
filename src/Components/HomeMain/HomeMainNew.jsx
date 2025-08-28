import React from "react";
import HomeMain1 from "./HomeMain1";
import HomeMain2 from "./HomeMain2";
import HomeMain3 from "./HomeMain3";
import HomeMain4 from "./HomeMain4";
import HomeMain5 from "./HomeMain5";
import Navbar from "../NavBar/Navbar";
import Home9 from "../Home/Home9";
import FAQ from "../FAQ/FAQ";

const HomeMainNew = () => {
    return (
        <>
        <Navbar />
        <HomeMain1 />
        <HomeMain2 />
        <HomeMain3 />
        <HomeMain4 />
        <HomeMain5 />
        {/* <FAQ/> */}
        <Home9/>
        </>
    )
}

export default HomeMainNew;
