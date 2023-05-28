import React from "react";
import cc from "../imgs/cc.png";

const Select = () => {
  return (
    <div className="flex justify-center bg-[#eeeeee]">
      <div className="flex justify-center items-center h-screen bg-[#eeeeee]">
        <div className="w-full sm:w-auto px-4 py-3 mx-2 md:mx-0 mb-5 bg-white rounded-md lg:mt-[-25vh] md:mt-[-25vh] relative">
          <h1 className="text-sm text-gray-700 font-bold mb-6 bg-[#eeeeee] absolute -top-8 left-1">
            Completá los datos de tu tarjeta
          </h1>

          <div className="flex flex-col mb-4">
            <label className="block text-xs text-black mb-1 label-numero">
              Número de tarjeta
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-xs text-black mb-1 label-cosa">
              Vencimiento
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-xs text-black mb-1 label-cosita">
              Nombre del titular
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-xs text-black mb-1 label-cosilla">
              CVV
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
            />
          </div>

          <div className="flex flex-col">
            <button className="px-4 py-2 font-semibold text-white bg-[#d6e2ea] rounded mb-1">
              <span className="text-[#009ee3]">Volver</span>
            </button>
            <button className="px-12 py-2 font-semibold text-white bg-[#009ee3] rounded">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
