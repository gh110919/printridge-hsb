import styled from "styled-components";
import { Layout } from "../components/layout";
import refil from "/images/refil.svg";
import repair from "/images/repair.svg";

const Box = styled.div`
  display: flex;
  width: 1368px;
  height: 324px;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--White, #fff);
`;

const Title = styled.h2<{ color: string }>`
  color: ${(props) => props.color};
  font-family: "Fira Sans";
  font-size: 46px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 50.6px */
`;

const Subtitle = styled.h2<{ color: string }>`
  color: ${(props) => props.color};
  font-family: "Fira Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Container = styled.div`
  display: flex;
  width: 970px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  align-self: stretch;
`;

const Package = styled.div`
  display: flex;
  width: 1368px;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  background: #005ce5;
`;

const Button = styled.button`
  display: flex;
  width: 200px;
  height: 100px;
  padding: 0px 21px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #001027;
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  justify-content: center;
  align-items: center;
`;

const Division = styled.div`
  display: flex;
  width: 970px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  align-self: stretch;
`;

const posts = [
  {
    title: "Заправка картриджей",
    subtitle:
      "Заправка картриджей в нашей компании осуществляется с использованием тонеров лучших мировых производителей. В процессе заправки каждый картридж тестируется на наличие дефектов, тщательно вычищается от старого содержимого, разбирается и собирается без повреждения корпуса.Так же, возможна доставка от клиента и обратно.",
    image: refil,
  },
  {
    title: "Ремонт принтеров и МФУ",
    subtitle:
      "Ремонт принтеров и МФУ в нашей компании осуществляется с использованием тонеров лучших мировых производителей. В процессе заправки каждый картридж тестируется на наличие дефектов, тщательно вычищается от старого содержимого, разбирается и собирается без повреждения корпуса.Так же, возможна доставка от клиента и обратно.",
    image: repair,
  },
];

export const Home = () => {
  return (
    <Layout>
      {posts.map((e, i) => {
        return (
          <Box key={i}>
            <Container>
              <Title color="#005CE5">{e.title}</Title>
              <Subtitle color="#0C0C0C">{e.subtitle}</Subtitle>
            </Container>
            <img src={e.image} alt={e.title} />
          </Box>
        );
      })}
      <Package>
        <Division>
          <Title color="#FFF">Остались вопросы?</Title>
          <Subtitle color="#FFF">
            Вы можете связаться с нами с помощью формы “Обратной связи”,наши
            специалисты ответят вам в течении рабочего дня.
          </Subtitle>
        </Division>
        <Button>Написать</Button>
      </Package>
    </Layout>
  );
};
