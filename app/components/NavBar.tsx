import React from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const NavBar = () => {
  return (
    <>
      <div className={pacifico.className}>
        <div class="p-7 text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 items-baseline">
          Only Flans
        </div>
      </div>
    </>
  );
};

export default NavBar;
