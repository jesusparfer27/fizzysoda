import localFont from 'next/font/local'

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import './input.css'
import Header from '@/components/Header';
import ViewCanvas from '@/components/ViewCanvas';

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2", // Usa una ruta desde /public
  weight: "100 900",
  display: "swap",
  variable: "--font-alpino",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className='overflow-x-hidden bg-yellow-300'>
      <Header/>
      <main>
      {children}
      <ViewCanvas/>
      </main>
      {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
