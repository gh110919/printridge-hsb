import styled from "styled-components";
import { Layout } from "../components/layout";
import refil from "/images/refil.svg";
import repair from "/images/repair.svg";
import { Image_ } from "../components/image";

const Box = styled.div`
  display: flex;
  width: calc(1368 * var(--dv));
  height: calc(324 * var(--dv));
  padding: calc(50 * var(--dv));
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: calc(40 * var(--dv));
  background: var(--White, #fff);
`;

const Title = styled.h2<{ color: string }>`
  color: ${(props) => props.color};
  font-family: "Fira Sans";
  font-size: calc(46 * var(--dv));
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* calc(50.6 * var(--dv)) */
`;

const Subtitle = styled.h2<{ color: string }>`
  color: ${(props) => props.color};
  font-family: "Fira Sans";
  font-size: calc(24 * var(--dv));
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Container = styled.div`
  display: flex;
  width: calc(970 * var(--dv));
  flex-direction: column;
  align-items: flex-start;
  gap: calc(24 * var(--dv));
  flex-shrink: 0;
  align-self: stretch;
`;

const Package = styled.div`
  display: flex;
  width: calc(1368 * var(--dv));
  padding: calc(50 * var(--dv));
  justify-content: space-between;
  align-items: center;
  border-radius: calc(40 * var(--dv));
  background: #005ce5;
`;

const Button = styled.button`
  display: flex;
  width: calc(200 * var(--dv));
  height: calc(100 * var(--dv));
  padding: calc(0 * var(--dv)) calc(21 * var(--dv));
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: calc(20 * var(--dv));
  background: #001027;
  color: var(--White, #fff);
  font-family: "Fira Sans";
  font-size: calc(18 * var(--dv));
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  justify-content: center;
  align-items: center;
`;

const Division = styled.div`
  display: flex;
  width: calc(970 * var(--dv));
  flex-direction: column;
  align-items: flex-start;
  gap: calc(24 * var(--dv));
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
            <Image_ src={e.image} width={100} height={100} />
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
