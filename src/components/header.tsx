import styled from "styled-components";
import man from "/images/man.png";
import printer from "/images/printer.svg";
import { Logo } from "./logo";
import { Link } from "./link";

const Header_ = styled.header`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

const First = styled.div`
  display: flex;
  width: 1020px;
  height: 672px;
  padding: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--White, #fff);
`;

const Image = styled.img`
  border-radius: 40px;
  background: #005ce5;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Box = styled.div`
  display: flex;
  width: 324px;
  height: 324px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #005ce5;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 920px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 50px;
  margin: 0;
`;

const Title = styled.h1`
  color: #005ce5;
  font-family: "Fira Sans";
  font-size: 74px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 81.4px */
`;

const Subtitle = styled.p`
  color: #0c0c0c;
  font-family: "Fira Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Package = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const links = [
  { title: "Заправка картриджей", link: "#" },
  { title: "Ремонт принтеров", link: "#" },
  { title: "Контакты", link: "#" },
];

export const Header = () => {
  return (
    <Header_>
      <First>
        <Head>
          <Logo color="black">Printridge</Logo>
          <Container>
            {links.map((e, i) => {
              return (
                <Link key={i} href={e.link} color="#0c0c0c">
                  {e.title}
                </Link>
              );
            })}
          </Container>
        </Head>
        <Package>
          <Title>Printridge — решение проблем с печатной техникой</Title>
          <Subtitle>
            Заправка картриджей всех видов и ремонт принтеров любой модели и
            любой сложности
          </Subtitle>
        </Package>
      </First>
      <Wrapper>
        <Box>
          <Image src={man} alt="" />
        </Box>
        <Box>
          <Image src={printer} alt="" />
        </Box>
      </Wrapper>
    </Header_>
  );
};
