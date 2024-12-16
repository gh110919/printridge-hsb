import styled from "styled-components";
import man from "/images/man.png";
import printer from "/images/printer.svg";
import { Logo } from "./logo";
import { Link } from "./link";
import { Image_ } from "./image";

const Header_ = styled.header`
  display: flex;
  gap: calc(24 * var(--dv));
  margin-bottom: calc(24 * var(--dv));
`;

const First = styled.div`
  display: flex;
  width: calc(1020 * var(--dv));
  height: calc(672 * var(--dv));
  padding: calc(50 * var(--dv));
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: calc(40 * var(--dv));
  background: var(--White, #fff);
`;

// const Image = styled.img`
//   border-radius: calc(40 * var(--dv));
//   background: #005ce5;
// `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(24 * var(--dv));
`;

const Box = styled.div`
  display: flex;
  width: calc(324 * var(--dv));
  height: calc(324 * var(--dv));
  padding: calc(50 * var(--dv));
  justify-content: center;
  align-items: center;
  gap: calc(10 * var(--dv));
  flex-shrink: 0;
  border-radius: calc(40 * var(--dv));
  background: #005ce5;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: calc(920 * var(--dv));
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: calc(50 * var(--dv));
  margin: 0;
`;

const Title = styled.h1`
  color: #005ce5;
  font-family: "Fira Sans";
  font-size: calc(74 * var(--dv));
  font-style: normal;
  font-weight: 500;
  line-height: calc(81.4 * var(--dv));
`;

const Subtitle = styled.p`
  color: #0c0c0c;
  font-family: "Fira Sans";
  font-size: calc(30 * var(--dv));
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Package = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: calc(24 * var(--dv));
  align-self: stretch;
`;

const ImageBox = styled.div`
  border-radius: calc(40 * var(--dv));
  overflow: hidden;
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
        <ImageBox>
          <Image_ src={man} width={324} height={324} />
        </ImageBox>
        <Box>
          <Image_ src={printer} width={196} height={196} />
        </Box>
      </Wrapper>
    </Header_>
  );
};
