import "./App.css";
import cc from "./imgs/cc.png";

export default function App() {
  return (
    <div>
      {" "}
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
      <div className="flex justify-center bg-[#eeeeee]">
        <div className="flex justify-center items-center min-h-screen bg-[#eeeeee]">
          <div className="w-80 sm:w-auto px-4 py-3 mx-2 md:mx-0 mb-5 bg-white rounded-md relative">
            <h1 className="text-sm text-gray-700 font-bold mb-6 bg-[#eeeeee] absolute -top-8 left-1">
              Completá los datos de tu tarjeta
            </h1>

            <div className="text-center mb-4">
              <img
                src={cc}
                alt="Imagen"
                className="hidden sm:block mx-auto w-30 h-auto my-2"
              />
            </div>

            <div className="flex flex-col mb-4 sm:flex-row">
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
    </div>
  );
}
