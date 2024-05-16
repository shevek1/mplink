import React from "react";

const Card = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto mt-[-10px] max-w-screen-xl bg-slate-100">
        <div
          className="relative h-52 bg-white rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
          style={{
            backgroundImage:
              'url("https://i0.wp.com/chocale.cl/wp-content/uploads/2021/01/paris-despacho-24-horas.jpg?fit=1000%2C667&ssl=1")',
          }}
        >
          <div className="px-1 pt-2 pb-2">
            <div className="absolute inset-x-0 -bottom-10 mx-auto w-32 rounded-full border-8 border-white shadow-lg">
              <span className="absolute right-1 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
              <img
                className="mx-auto h-auto w-full rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfqoc4n9fHkJlgyRnLilLJrFDLFri9HlLMx5iSj3ziw&s"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
