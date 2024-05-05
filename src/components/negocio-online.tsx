import Image from "next/image";
import React from "react";

export const NegocioOnline = () => {
  return (
    <div className="flex py-12 px-2 flex-col md:flex-row gap-4 bg-[#142A75] text-white justify-center items-center">
      <Image
        className="w-full h-full max-w-xl"
        alt="O que é o Formula de Negocios Online?"
        src="/formula-negocios-online-background.png"
        width={0}
        height={0}
        style={{
          objectFit: "contain",
        }}
        sizes="100vw"
      />

      <div className="flex max-w-md flex-col">
        <span className="text-center">Fórmula Negócio Online</span>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-500">
          Quem sou eu e porque você pode confiar em mim
        </h2>
        <p className="mt-2 font-light text-center">
          Muito prazer, eu sou o Alex Vargas, empresário digital com{" "}
          <span className="font-bold">18 anos de experiência.</span> desenvolver
          um <span className="font-bold">método único e simples</span> para
          criar negócios de sucesso na internet, 100% do zero. Sou um dos
          especialistas em negócios online mais experientes do mercado.{" "}
          <span className="font-bold">Estou desde 2004</span> vendendo produtos
          online e atualmente tenho mais de{" "}
          <span className="font-bold">400 mil alunos</span> em meus
          treinamentos. Já estou com experiência. Por ter tentado (e falhado)
          várias vezes, finalmente consegui{" "}
          <span className="font-bold">mais de 1,3 milhão de inscritos</span> no
          canal e quase 1 milhão de seguidores no Instagram… E nessa página você
          vai entender como aplicar esse método para você e{" "}
          <span className="font-bold">
            mudar sua realidade financeira, independente de como ela esteja
            hoje.
          </span>
        </p>
      </div>
    </div>
  );
};
