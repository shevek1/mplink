import React from "react";

const Nav = () => {
  return (
    <nav className="bg-white sm:hidden">
      <div className="text-center py-2">
        <h1 className="text-lg font-semibold">MP</h1>
      </div>
      <hr className="border-t-1 border-gray-200" />
      <div className="text-center flex py-2">
        <p className="text-sm text-left font-bold">PACK 24 FOTOS</p>
        <p className="text-sm font-bold ml-auto text-right sm:ml-2">$1000</p>
      </div>
    </nav>
  );
};

export default Nav;
