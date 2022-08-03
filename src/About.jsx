import React from "react";
import MixHoAbPage from "./components/MixHoAbPage";

const About = () => {
  const data = {
    name: "Vivek Mishra",
    image: "About.png",
  };

  return (
    <div>
      <MixHoAbPage {...data} />
    </div>
  );
};

export default About;
