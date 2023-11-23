import React from "react";
import styles from "app/components/index.css";
import Image from "next/image";

const WelcomePage = () => {
  return (
    <div class="container mx-auto px-4 grid grid-cols-1 gap-4 m-5 bg-lime-300 ">
      <div>
        <div class="container h-120 max-h-full mx-auto px-4 bg-gradient-to-r from-cyan-500 to-blue-500 m-10 p-1 place-items-center">
          <div class="container h-40 max-h-full mx-auto px-4 m-10 "></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
