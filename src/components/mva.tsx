import Image from "next/image";
import React from "react";

export const Mva = () => {
  return (
    <div className="flex py-8 px-2 flex-col md:flex-row bg-mva-background bg-center bg-cover bg-no-repeat text-white justify-center items-center">
      <Image
        className="w-full h-full max-w-xl"
        alt="O que é o Mecanismo de Vendas Automáticas?"
        src="/mva.png"
        width={0}
        height={0}
        style={{
            objectFit: "contain"
        }}
        sizes="100vw"
      />

      <div className="flex max-w-md flex-col gap-4">
        <h2 className="text-2xl font-bold text-center md:text-left">
          O que é o <span className="text-yellow-500">MVA?</span>
        </h2>
        <p className="font-light">
          Um mecanismo à prova de falhas e de desculpas! Quando ativado não para
          de colocar dinheiro no seu bolso. 100% no automático. Sem você
          aparecer. Sem saber nada de marketing.
        </p>
        <p className="font-light">
          É o mesmo mecanismo que eu utilizei para fazer minha primeira venda,
          meus primeiros R$1.000, R$100.000 e que utilizo até hoje, 5 anos
          depois, para ter esses resultados…
        </p>
      </div>
    </div>
  );
};
