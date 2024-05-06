import { Button } from "@/components/ui/button";
import Image from "next/image";
import { format, addDays } from "date-fns";
import { Mva } from "@/components/mva";
import { Cripto } from "@/components/cripto";
import { NegocioOnline } from "@/components/negocio-online";
import Link from "next/link";

export default function Home() {
  const today = new Date();

  const nextDay = addDays(today, 1);
  const dayAfterNext = addDays(today, 2);

  const todayFormatted = format(today, "dd");
  const nextDayFormatted = format(nextDay, "dd");
  const dayAfterNextFormatted = format(dayAfterNext, "dd");

  return (
    <main id="topo">
      <div className="bg-red-600 text-center text-sm px-4 text-white">
        Somente nos dias:
        <span className="font-bold">
          {" "}
          {todayFormatted}, {nextDayFormatted} e {dayAfterNextFormatted}
        </span>{" "}
        você terá um desconto especial de 53%
      </div>

      <div className="bg-hero-background bg-cover bg-center bg-no-repeat pb-12 px-2">
        <div className="flex items-center flex-col gap-1 py-3 px-2">
          <h1 className="font-bold text-xl md:text-2xl uppercase text-white text-center max-w-xl">
            Descubra as 3 Melhores Formas de Ganhar Dinheiro Online em 2024.
          </h1>
          <p className="font-bold text-base md:text-xl uppercase text-yellow-300 text-center max-w-2xl">
            Três métodos comprovados para investir, construir negócios e vender
            online sem complicações
          </p>
        </div>

        <div className="flex flex-wrap gap-6 px-2 items-center justify-center py-4">
          <div className="flex items-center gap-4 px-2 justify-end flex-col py-4 bg-mecanismo w-[350px] bg-center h-[440px]">
            <Image
              alt="logo-mecanismo-de-vendas-automaticas"
              src="/logo-mecanismo-de-vendas-automaticas.webp"
              width={250}
              height={50}
              className="bg-contain"
            />
            <p className="text-white font-bold text-center">
              Ganhe produtos prontos e validados para copiar e{" "}
              <span className="text-yellow-500">
                vender 100% no automático e fature até R$5.000/mês
              </span>{" "}
              SEM APARECER.
            </p>

            <Button
              asChild
              className="bg-yellow-500 rounded-full px-6 hover:bg-yellow-600"
            >
              <Link href="https://go.hotmart.com/Y92381570H">
                Adquirir curso
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2 px-2 justify-end flex-col py-4 bg-cripto w-[350px] bg-center h-[440px]">
            <Image
              alt="cripto-blinders-logo"
              src="/cripto-blinders-logo.webp"
              width={250}
              height={50}
              className="bg-contain"
            />
            <p className="text-white text-sm text-center">
              Aprenda agora, a partir de um método próprio de multiplicação e
              proteção de capital, a como investir no mercado mais assimétrico
              do século XXI: o de criptomoedas.
            </p>

            <Button
              asChild
              className="bg-red-600 rounded-full px-6 hover:bg-yellow-600"
            >
              <Link href={"https://go.hotmart.com/J92764021B"}>
                Adquirir curso
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-1 px-1 text-sm justify-end flex-col bg-contain py-4 bg-formula w-[350px] bg-center h-[440px]">
            <div className="uppercase">
              <p className="text-white font-bold text-center">
                Descubra agora o método definitivo que eu usei para{" "}
                <span className="text-yellow-400">construir um negócio</span>{" "}
              </p>
              <p className="text-white font-bold text-center">
                <span className="text-yellow-400">online do zero</span> que
                fatura mais de R$100 mil todo mês
              </p>
            </div>

            <Button
              
              className="bg-blue-500 rounded-full px-6 hover:bg-yellow-600"
            >
              <Link href={"https://go.hotmart.com/L92421036A"}>
                Adquirir curso
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center mt-2">
          <Button
            className="rounded-full bg-green-500 text-wrap text-base md:text-lg font-bold py-10 px-16"
            size="lg"
            asChild
          >
            <Link
              className="text-center"
              href={"https://go.hotmart.com/L92421036A?ap=fb73"}
            >
              QUERO COMEÇAR AGORA <br /> Só HOJE: menos de 0,97 centavos por dia
            </Link>
          </Button>

          <Image
            className="bg-cover w-full h-full max-w-md"
            alt="icons-meio-de-pagamento"
            src="/icons-meio-de-pagamento.webp"
            width={0}
            height={0}
            sizes="100vw"
          />

          <div className="flex items-center gap-4 flex-wrap px-4 justify-center text-sm md:text-base">
            <div className="flex gap-2 text-white justify-center items-center">
              <Image
                alt="selo de garantia"
                src="/garantia.webp"
                width={40}
                height={40}
                sizes="100vw"
              />
              <h2>Garantia de 07 dias</h2>
            </div>
            <div className="flex gap-2 text-white justify-center items-center">
              <Image
                alt="selo de suporte"
                src="/suporte.webp"
                width={40}
                height={40}
                sizes="100vw"
              />
              <h2>Suporte 48 horas úteis</h2>
            </div>
            <div className="flex gap-2 text-white justify-center items-center">
              <Image
                alt="selo de card"
                src="/card.webp"
                width={40}
                height={40}
                sizes="100vw"
              />
              <h2>Compra Segura</h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Mva />
      </div>

      <div>
        <Cripto />
      </div>

      <div>
        <NegocioOnline />
      </div>

      <div className="flex flex-col justify-center items-center my-8 px-4">
        <h3 className="font-bold text-3xl text-center">
          Pode acreditar… <br /> Esses são resultados reais de pessoas reais!
        </h3>
        <span className="text-sm mt-2 text-center">
          Detalhe: todos começaram sem saber nada, e conseguiram vencer seguindo
          o método Fórmula Negócio Online.
        </span>

        <div className="flex md:gap-4 gap-2 flex-wrap justify-center items-center">
          <Image
            className="w-full max-w-[250px] h-full"
            alt="Fotos reais comprovando meus cursos"
            src="/metodo-comprovado1.webp"
            width={0}
            height={0}
            style={{
              objectFit: "contain",
            }}
            sizes="100vw"
          />
          <Image
            className="w-full max-w-[250px] h-full"
            alt="Fotos reais comprovando meus cursos"
            src="/metodo-comprovado2.webp"
            width={0}
            height={0}
            style={{
              objectFit: "contain",
            }}
            sizes="100vw"
          />
          <Image
            className="w-full max-w-[250px] h-full"
            alt="Fotos reais comprovando meus cursos"
            src="/metodo-comprovado3.webp"
            width={0}
            height={0}
            style={{
              objectFit: "contain",
            }}
            sizes="100vw"
          />
        </div>
        <Button
          asChild
          className="rounded-full py-8 text-center text-wrap bg-green-500 font-bold text-xl"
          size="lg"
        >
          <Link href={"#topo"}>Comece Agora e Multiplique Seu Capital!</Link>
        </Button>
      </div>
    </main>
  );
}
