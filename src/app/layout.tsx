import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Os Melhores Cursos para Ganhar Dinheiro Online em 2024",
  description:
    "Aprenda os segredos do marketing digital, como investir em criptomoedas e construir um negócio online do zero. Três cursos comprovados que mostram como ganhar dinheiro online de forma rápida e sem complicações.",
};

const GTM_ID = "GTM-XXXXXX"; // Google Tag Manager ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" sizes="any" />

        {/* Meta Tags para SEO */}
        <title>Descubra os Melhores Cursos para Ganhar Dinheiro Online</title>
        <meta
          name="description"
          content="Três cursos para ganhar dinheiro online: investimentos em criptomoedas, negócios online e vendas automáticas. Aprenda métodos comprovados para sucesso financeiro."
        />
        <meta
          name="keywords"
          content="cursos, ganhar dinheiro, marketing digital, negócios online, criptomoedas, vendas automáticas"
        />
        <meta name="author" content="Seu Nome ou Nome da Empresa" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://formulasdesucesso.com.br/" />

        {/* Google Tag Manager */}
        <meta
          name="google-site-verification"
          content="k2GOZcNsMD3HBe53teDo0ickU_1NXUlEYIoOeAtGH4s"
        />

        <Script
          id=""
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16529143286');
            `,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16529143286"
        ></Script>
        <Script
          id=""
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16529143286');
            `,
          }}
        />
      </head>

      <body className={inter.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
