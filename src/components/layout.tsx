import { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./footer";
import { Header } from "./header";

const Main = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Layout = (props: { children?: ReactNode }) => {
  return (
    <>
      <Header></Header>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </>
  );
};
