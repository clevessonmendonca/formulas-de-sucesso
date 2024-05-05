import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="text-sm flex font-light mt-16 bg-gray-50 px-4 py-2 justify-center text-center gap-3 flex-wrap md:justify-around ">
      <span>
        Copyright © 2024 Melhores Cursos Marketing Digital | Todos os direitos
        reservados.
      </span>

      <span>
        Desenvolvida por{" "}
        <Link href={"https://www.instagram.com/starfy.agencia/"}>STARFY</Link>
      </span>
    </div>
  );
};
