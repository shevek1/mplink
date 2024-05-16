import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="bg-[#009ee3] justify-between w-full flex ">
        <div className="">
          <img
            className="w-20 mt-1 first-letter:h-10 flex justify-center"
            alt="logomp"
            src="https://i.ibb.co/pfVQ2Zj/mp-logo.png"
          />
        </div>
        <h1 className="block mb-3 font-medium mt-3 mr-3 font-proxima text-white">
          Ayuda
        </h1>
      </nav>
      <nav className="bg-white justify-center w-full flex ">
        <img
          className="w-8 flex justify-center mt-2 h-8"
          alt="h"
          src="https://static.mlstatic.com/org-img/mkt/email-mkt-assets/checkout-off/bag.png"
        />
        <h1 className="block mb-3 font-medium mt-3 font-proxima">
          Emiliana Ortiz
        </h1>
      </nav>
      <hr className="mx-auto w-5/6" />
      <div className="bg-white justify-between w-full flex">
        <div className="mt-3 mb-3">
          <h1 className="block text-left font-proxima ml-4">Pack de fotos</h1>
        </div>
        <h1 className="block text-left mr-4 mt-4 font-proxima font-bold">
          $ 3.000
        </h1>
      </div>
    </div>
  );
};

export default Nav;
