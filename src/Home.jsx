import React from "react";
import MixHoAbPage from "./components/MixHoAbPage";

const Home = () => {
  const data = {
    name: "Ritesh Pandey",
    image: "Home.png",
  };

  return (
    <div>
      <MixHoAbPage {...data} />
    </div>
  );
};

export default Home;
