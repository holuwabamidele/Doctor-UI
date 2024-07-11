import styled from "styled-components";
import doctor from "../assets/doc.png";

const HeroPage = () => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <h1 style={{ color: "#2f99ff" }}>
            We Ensure <br />
            the Best <span style={{ color: "black" }}>Health</span> <br />
            services for You.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            nulla aliquam, mollitia blanditiis veniam quos nisi nesciunt odio
            aspernatur eaque! Necessitatibus distinctio, reiciendis dolores
            iusto fuga saepe sequi ullam architecto!
          </p>
          <button>Get Appointment</button>
        </TextDiv>
        <ImageDiv>
          <img src={doctor} alt="logo" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default HeroPage;

const Container = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1120px) {
    justify-content: center;
  }
`;

const TextDiv = styled.div`
  /* background-color: red; */
  width: 500px;
  button {
    font-family: Montserrat;
    border: none;
    border-radius: 8px;
    width: 150px;
    height: 50px;
    background-color: #2f99ff;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
const ImageDiv = styled.div`
  img {
    /* background-color: red; */
    width: 400px;
    height: 500px;
    object-fit: cover;
  }
`;
