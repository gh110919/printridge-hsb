import styled from "styled-components";
import location from "/images/location.svg";
import { Logo } from "./logo";
import { Link } from "./link";
import vkontakte from "/images/vkontakte.svg";
import telegram from "/images/telegram.svg";

const Footer_ = styled.footer`
  display: flex;
  gap: 24px;
  margin-top: 24px;
`;

const Box = styled.div`
  display: flex;
  width: 672px;
  height: 324px;
  padding: 50px;
  align-items: flex-start;
  gap: 50px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #14243b;
`;

const Address = styled.p`
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Package = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  width: 261px;
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
  gap: 24px;
  text-align: start;
`;

const Terms = styled.a`
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: 14px;
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
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 33px */
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h2`
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Contact = styled.a`
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 33px */
`;

const Image = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #005ce5;
`;

const Images = styled.div`
  display: flex;
  width: 144px;
  align-items: end;
  gap: 24px;
  flex-shrink: 0;
  height: 224px;
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
            <img src={location} alt="" />
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
          <Image>
            <img src={vkontakte} alt="" />
          </Image>
          <Image>
            <img src={telegram} alt="" />
          </Image>
        </Images>
      </Box>
    </Footer_>
  );
};
