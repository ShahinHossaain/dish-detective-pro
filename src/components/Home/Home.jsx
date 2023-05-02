import React, { useEffect } from "react";
import Banner from "../../InsideComponent/HomeInside/Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "../../InsideComponent/HomeInside/Chef";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="mt-20">
        {chefs.map((chef) => (
          <Chef chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Home;
