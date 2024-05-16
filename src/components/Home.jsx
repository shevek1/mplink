"use strict";
import React from "react";
import { Link } from "react-router-dom";
import banerCelu from "../imgs/baner1.png";
import banerPC from "../imgs/banerpc.png";

const Home = () => {
  const cards = [
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: "$198.000",
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: "$198.000",
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: "$198.000",
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: "$198.000",
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: "$198.000",
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      discount: 50,
      originalPrice: "$319.000",
      finalPrice: "$198.000",
      link: "/detail/Televisor%20Kanji%2032%E2%80%B3%20Led%20Hd%20TV-32MT005/500",
    },
    // Agrega más objetos con la información de las demás cards aquí
  ];

  const otherCards = [
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      originalPrice: "$479.000",
      finalPrice: 216000.0,
      discount: 50,
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      originalPrice: "$479.000",
      finalPrice: 216000.0,
      discount: 50,
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      originalPrice: "$479.000",
      finalPrice: 216000.0,
      discount: 50,
    },
    {
      title: "Televisor Kanji 32″ Led Hd TV-32MT005",
      img: "https://http2.mlstatic.com/D_NQ_NP_732048-MLA73777312465_012024-O.webp",
      originalPrice: "$479.000",
      finalPrice: 216000.0,
      discount: 50,
    },
    // Agrega más objetos con la información de las demás cards aquí
  ];

  return (
    <div className="bg-white font-proxima">
      <div className="mx-auto max-w-screen-xl bg-slate-100">
        <div className=" flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
          <div className="  max-w-xl mt-5">
            <span className="flex">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png"
                className="w-8 h-5 ml-2 mt-2 mr-2"
                alt=""
              />
              <h1 className="text-2xl font-bold text-gray-800">
                Paris Tecno | Kanji
              </h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png"
                className="w-8 h-5 ml-2 mt-2"
                alt=""
              />
            </span>
            <p className="mt-2 text-lg text-gray-600 ">
              Descubri nuestras ofertas exclusivas en productos tecnologicos
              importados.{" "}
              <span className="underline"> Envios a toda la Argentina.</span>
              Paga con <span className="font-medium">Mercado Pago</span> hasta
              24 cuotas sin interés 🏡💖
            </p>
          </div>
        </div>

        <div className="mb-10 max-w-screen">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <img
              src={banerCelu}
              alt=""
              className="object-cover w-full h-auto lg:hidden"
            />
            <img
              src={banerPC}
              alt=""
              className="object-cover w-full h-auto hidden lg:block lg:h-auto max-w-full"
            />
          </div>
        </div>

        <section className="bg-slate-50 py-12 text-red-400 sm:py-16 lg:py-20 mt-[-70px]">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
              <h2 className="font-mono text-2xl font-bold sm:text-3xl">
                {">"} ¡OFERTAS HOT SALE! {"<"}
              </h2>
              <p className="mt-4 text-base text-gray-700">
                ¡No te quedes afuera del partido! Llevate tu SMART TV FULL HD
                32" en 3, 6, 12, 18 o 24 cuotas sin interés. 🎉⚽️
                <br />
                <span className="text-gray-500">
                  (Oferta válida hasta agotar stock 18/05/2024).
                </span>
              </p>
            </div>

            {/* <!-- TARJETAS DE OFERTA --> */}

            <div className="mt-10 justify-center grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
              {otherCards.map((card, index) => (
                <article className="relative" key={index}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      className="h-full w-full object-cover hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                      src={card.img}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-0 m-1 rounded-full bg-white">
                    <p className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                      {card.discount}
                    </p>
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div className="">
                      <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                        <Link
                          to="/detail"
                          state={{
                            img: card.img,
                            title: card.title,
                            finalPrice: card.finalPrice,
                            discount: card.discount,
                          }}
                        >
                          {card.title}
                        </Link>
                        <span className="absolute" aria-hidden="true"></span>
                      </h3>
                      <div className="mt-2 flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="block h-3 w-3 align-middle text-yellow-500 sm:h-4 sm:w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              className=""
                            ></path>
                          </svg>
                        ))}
                      </div>
                    </div>

                    <div className="text-right">
                      <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                        {card.originalPrice}
                      </del>
                      <p className="text-base font-bold md:text-base">
                        {card.finalPrice}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* <!-- MITAD DE LAS CARDS --> */}

        <div className="mx-auto max-w-md text-center mt-5">
          <h2 className="font-mono text-2xl font-bold sm:text-3xl">
            - Nuestros productos -
          </h2>
          <p className="font-bold text-sky-500">( Envios a todo el país )</p>
          <p className="mt-4 text-base text-gray-700">
            Los mejores precios y ofertas en Televisores. ¡Aprovechá nuestras
            cuotas sin interés!
          </p>
        </div>

        {/* <!-- TODAS LAS CARDS --> */}

        <main className="grid bg-slate-50 grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0 mt-5">
          {" "}
          {cards.map((card, index) => (
            <article className="relative" key={index}>
              <div className="aspect-square overflow-hidden">
                <img
                  className="h-full w-full object-cover hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  src={card.img}
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-1 rounded-full bg-white">
                <p className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  {card.discount}
                </p>
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div className="">
                  <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                    <Link
                      to="/detail"
                      state={{
                        img: card.img,
                        title: card.title,
                        finalPrice: card.finalPrice,
                        discount: card.discount,
                      }}
                    >
                      {card.title}
                    </Link>
                    <span className="absolute" aria-hidden="true"></span>
                  </h3>
                  <div className="mt-2 flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="block h-3 w-3 align-middle text-yellow-500 sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        ></path>
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                    {card.originalPrice}
                  </del>
                  <p className="text-base font-bold md:text-base">
                    {card.finalPrice}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
