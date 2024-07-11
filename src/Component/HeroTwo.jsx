import styled from "styled-components";
import { FaUserDoctor } from "react-icons/fa6";

const HeroTwo = () => {
  const CardsInfo = [
    {
      icon: <FaUserDoctor />,
      title: "Search Doctor",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <FaUserDoctor />,
      title: "Request a Consultant",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <FaUserDoctor />,
      title: "Make Appointment",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: <FaUserDoctor />,
      title: "Get Solution",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <h1>
          Easy <span style={{ color: "#2f99ff" }}>steps</span> for your care
        </h1>
        <CardHolder>
          {CardsInfo.map((data, index) => (
            <Card key={index}>
              <div>{data.icon}</div>
              <h3>{data.title}</h3>
              <p>{data.content}</p>
            </Card>
          ))}
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default HeroTwo;

const Container = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Card = styled.div`
  div {
    font-size: 30px;
    margin-bottom: -20px;
    color: #2f99ff;
  }
  h3 {
    font-size: 14px;
    margin-bottom: -10px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 200px;
  width: 200px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  :hover {
    background-color: lightblue;
  }
`;
