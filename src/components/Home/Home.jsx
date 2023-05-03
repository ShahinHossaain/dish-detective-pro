import React, { useEffect } from "react";
import Banner from "../../InsideComponent/HomeInside/Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "../../InsideComponent/HomeInside/Chef";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <p className="text-center text-7xl font-serif font-bold mt-28">
        World Class Chefs
      </p>
      <div className="md:grid grid-cols-2 mt-10 mx-8 md:mx-16">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Home;
