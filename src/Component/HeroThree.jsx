import styled from "styled-components";
import doctor2 from "../assets/doctor2.jpg";
import { HiMiniArrowRightCircle } from "react-icons/hi2";

const HeroThree = () => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <h1>
            Book an <span style={{ color: "#2f99ff" }}>Appointment</span> online
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptates voluptas, unde ullam placeat sapiente amet.{" "}
            <br />
            <br />
            est corrupti perferendis quam recusandae dolor laborum ipsa
            molestias saepe vitae esse id incidunt!
          </p>
          <div>
            <icon>
              <HiMiniArrowRightCircle />
            </icon>
            <main>Medic is your reliable healthcare partner</main>
          </div>
          <div>
            <icon>
              <HiMiniArrowRightCircle />
            </icon>
            <main>Expert care, your well being</main>
          </div>
        </TextDiv>
        <ImageDiv>
          <img src={doctor2} alt="logo" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};
export default HeroThree;

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
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1120px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
const TextDiv = styled.div`
  width: 550px;
  p {
    font-size: 14px;
  }
  div {
    display: flex;
    align-items: center;
    text-align: center;
    icon {
      color: #2f99ff;
      font-size: 18px;
      margin-right: 5px;
    }
    main {
      font-weight: 700;
    }
  }

  @media (max-width: 1120px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
  }
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`;
const ImageDiv = styled.div`
  /* background-color: red; */
  img {
    object-fit: cover;
    width: 400px;
    height: 400px;

    @media (max-width: 768px) {
      width: 90%;
      justify-content: center;
    }
    @media (max-width: 500px) {
      width: 90%;
      justify-content: center;
    }
  }
`;
