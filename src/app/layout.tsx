import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container/Index";
import { Header } from "@/components/Header/Index";
import { Footer } from "@/components/Footer/Index";

export const metadata: Metadata = {
   title: "The blog - Este é um blog com Next.js",
   description: "Essa seria a descrição dessa página.",
};

type RootLayoutProps = {
   children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
   return (
      <html lang="pt-BR">
         <body>
            <Container>
               <Header />

               {children}

               <Footer />
            </Container>
         </body>
      </html>
   );
}
