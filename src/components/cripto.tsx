import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

export const Cripto = () => {
  return (
    <div className="flex py-20 px-2 flex-col md:flex-row bg-cripto-background bg-center bg-cover bg-no-repeat text-white">
      <div className="flex max-w-screen-lg items-center md:items-start flex-col container gap-4">
        <Image
          alt="cripto-blinders-logo"
          src="/cripto-blinders-logo.png"
          width={250}
          height={50}
          className="bg-contain"
        />
        <div className="max-w-md flex flex-col">
          <h2 className="text-xl md:text-2xl uppercase font-light flex flex-col text-center md:text-left">
            <span className="text-yellow-500 font-bold">
              Um Acervo de Conteúdos
            </span>
            que vão te ensinar a investir em{" "}
            <span className="font-bold">
              Criptomoedas, NFTS e Ativos Digitais
            </span>
          </h2>

          <Separator className="bg-yellow-500 my-2" />
          <p className="font-light text-sm mt-3 text-center md:text-start">
            Aprenda com um <span className="font-medium">método seguro</span>{" "}
            que vai ter tornar capaz de tomar suas próprias decisões afim de
            encontrar as melhores oportunidades de investimentos em cripto.
          </p>
        </div>
      </div>
    </div>
  );
};
