import styled from "styled-components";
import location from "/images/location.svg";
import { Logo } from "./logo";
import { Link } from "./link";
import vkontakte from "/images/vkontakte.svg";
import telegram from "/images/telegram.svg";
import { Image_ } from "./image";

const Footer_ = styled.footer`
  display: flex;
  gap: calc(24 * var(--dv));
  margin-top: calc(24 * var(--dv));
`;

const Box = styled.div`
  display: flex;
  width: calc(672 * var(--dv));
  height: calc(324 * var(--dv));
  padding: calc(50 * var(--dv));
  align-items: flex-start;
  gap: calc(50 * var(--dv));
  flex-shrink: 0;
  border-radius: calc(40 * var(--dv));
  background: #14243b;
`;

const Address = styled.p`
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: calc(18 * var(--dv));
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Package = styled.div`
  display: flex;
  align-items: flex-start;
  gap: calc(32 * var(--dv));
  align-self: stretch;
  width: calc(261 * var(--dv));
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(24 * var(--dv));
  text-align: start;
`;

const Terms = styled.a`
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: calc(14 * var(--dv));
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Case = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const Division = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const Links = styled.div`
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: calc(30 * var(--dv));
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* calc(33 * var(--dv)) */
  display: flex;
  flex-direction: column;
  gap: calc(24 * var(--dv));
`;

const Title = styled.h2`
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: calc(18 * var(--dv));
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Contact = styled.a`
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: calc(30 * var(--dv));
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* calc(33 * var(--dv)) */
`;

const ImageBox = styled.div`
  display: flex;
  width: calc(60 * var(--dv));
  height: calc(60 * var(--dv));
  padding: calc(10 * var(--dv));
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(10 * var(--dv));
  flex-shrink: 0;
  border-radius: calc(20 * var(--dv));
  background: #005ce5;
`;

const Images = styled.div`
  display: flex;
  width: calc(144 * var(--dv));
  align-items: end;
  gap: calc(24 * var(--dv));
  flex-shrink: 0;
  height: calc(224 * var(--dv));
`;

const links = [
  { title: "Главная", link: "#" },
  { title: "Заправка картриджей", link: "#" },
  { title: "Ремонт принтеров", link: "#" },
  { title: "Контакты", link: "#" },
];

export const Footer = () => {
  return (
    <Footer_>
      <Box>
        <Container>
          <Package>
            <Image_ src={location} width={60} height={60} />
            <Address>
              Обуховской обороны, д. 116 корп. 1, лит. Е, <br />
              4-й этаж, Офис 408
            </Address>
          </Package>
          <Logo color="white">Printridge</Logo>
        </Container>
        <Case>
          <Wrapper>
            {links.map((e, i) => {
              return (
                <Link key={i} href={e.link} color="white">
                  {e.title}
                </Link>
              );
            })}
          </Wrapper>
          <Terms>Пользовательское соглашение</Terms>
        </Case>
      </Box>
      <Box>
        <Division>
          <Title>Контактная информация</Title>
          <Links>
            <Contact href="tel:+7 (953) 368-18-36">+7 (953) 368-18-36</Contact>
            <Contact href="mailto:fox.spb@bk.ru">fox.spb@bk.ru</Contact>
          </Links>
        </Division>

        <Images>
          <ImageBox>
            <Image_ src={vkontakte} width={34} height={22} />
          </ImageBox>
          <ImageBox>
            <Image_ src={telegram} width={27} height={26} />
          </ImageBox>
        </Images>
      </Box>
    </Footer_>
  );
};
