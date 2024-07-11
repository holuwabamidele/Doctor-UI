import styled from "styled-components";
import doctor3 from "../assets/doctor3.jpg";

const HeroFour = () => {
  return (
    <Container>
      <Wrapper>
        <ImageDiv>
          <img src={doctor3} alt="" />
        </ImageDiv>
        <TextDiv>
          <div>
            <p>Try our</p>
            <h1>Virtual health care</h1>
            <p>
              All Medic services are available on web and mobile app version
              with fast services responses
            </p>
            <button>Start Chat</button>
          </div>
        </TextDiv>
      </Wrapper>
    </Container>
  );
};

export default HeroFour;

const Container = styled.div`
  margin-bottom: 100px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const ImageDiv = styled.div`
  img {
    object-fit: cover;
    width: 550px;
  }
  @media (max-width: 768px) {
    img {
      width: 90%;
    }
  }
`;
const TextDiv = styled.div`
  height: 62vh;
  background-color: #2f99ff;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    color: white;
    /* background-color: aqua; */
    width: 70%;
    h1 {
      font-size: 45px;
      margin-top: 3px;
      margin-bottom: 10px;
    }
    p {
      margin: 0px;
      line-height: 15px;
    }
    button {
      cursor: pointer;
      margin-top: 20px;
      width: 90px;
      height: 35px;
      background-color: white;
      color: #2f99ff;
      border-radius: 5px;
      border-color: lightblue;
    }

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;
