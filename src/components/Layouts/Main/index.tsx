import Head from "next/head";
import { Container, BoxContent, Footer } from "./styles";
import React from "react";
import { useMounted } from "@/hooks/useMounted";

interface ILayoutMainProps {
  children: React.ReactNode;
  title: string;
}

export const LayoutMain = ({ children, title }: ILayoutMainProps) => {
  const hasMounted = useMounted();
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Container>
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content="Site de traduções de Light Novels e mangás"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <BoxContent>{children}</BoxContent>
      </Container>
      <Footer>
        <strong>Tsundoku Traduções</strong>
        <div>
          <p>aqui vai ter os links de redes sociais</p>
        </div>
        <p>© 2023 Tsundoku Traduções</p>
      </Footer>
    </>
  );
};
