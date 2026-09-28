import iconoDerecha from "../assets/icono2-derecha-blanco.png";
import { useState, useRef } from "react";

const Player = () => {
  const [playerName, setPlayerName] = useState(null);
  const inputName = useRef(null);

  const handleButtonClicked = () => {
    /* console.log(inputName.current.value); */
    setPlayerName(inputName.current.value);
  };

  return (
    <section className="text-center mt-6">
      <h2 className="text-[#913131] mb-5 font-bold text-xl">
        {playerName ? (
          <span className="text-[#d1f0ec] flex justify-center">
            ¡Bienvenido al juego{" "}
            <p className="ml-2 text-[#913131] capitalize">{playerName}</p>!
          </span>
        ) : (
          "Bienvenido al juego, ¿quién eres aspirante?"
        )}
        {/* Bienvenido al juego {playerName ?? ', ¿quién eres aspirante?'} */}
      </h2>
      <p className="flex justify-center items-center">
        <img
          src={iconoDerecha}
          alt="icono apuntando a la derecha"
          className="w-5 mr-2"
        />
        <input
          className="rounded-s-lg bg-[#3f21218f] border-[1.5px] border-solid border-[#3f2121] p-1 pl-3 mr-px text-[#d1f0ec] focus:outline-none"
          type="text"
          ref={inputName}
        />
        <button
          className="rounded-e-lg font-bold cursor-pointer bg-[#691a1a] border-[1.5px] border-solid border-[#3f2121] px-4 py-1 text-[#f2f2f2] hover:bg-[#3c8379] hover:border-[#3c8379]"
          onClick={() => handleButtonClicked()}
        >
          Guarda tu nombre
        </button>
      </p>
    </section>
  );
};

export default Player;
