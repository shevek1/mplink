import "./App.css";
import cc from "./imgs/cc.png";

export default function App() {
  return (
    <div className="flex justify-center bg-[#eeeeee]">
      <div className="flex justify-center items-center h-screen bg-[#eeeeee]">
        <div className="w-80 sm:w-auto px-4 py-3 mx-2 md:mx-0 mb-5 bg-white rounded-md lg:mt-[-25vh] md:mt-[-25vh] relative">
          <h1
            className="text-sm text-gray-700 font-bold mb-6 bg-[#eeeeee] absolute -top-8 left-1
        "
          >
            Completá los datos de tu tarjeta
          </h1>

          <div className="text-center mb-4">
            <img src={cc} alt="Imagen" className="mx-auto w-30 h-auto my-2" />
          </div>

          <div className="flex mb-4">
            <div className="mr-2">
              <label className="block text-xs text-black mb-1 label-numero">
                Número de tarjeta
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
              />
            </div>
            <div>
              <label className="block text-xs text-black mb-1 label-cosa">
                Vencimiento
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
              />
            </div>
          </div>

          <div className="flex">
            <div className="mr-2">
              <label className="block text-xs text-black mb-1 label-cosita">
                Nombre del titular
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
              />
            </div>
            <div>
              <label className="block text-xs text-black mb-1 label-cosilla">
                CVV
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
              />
            </div>
          </div>

          <div className="absolute right-0 mt-5 ml-2 space-x-2">
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
}
