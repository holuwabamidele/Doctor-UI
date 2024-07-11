import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Medic>
          <h2>Medic.</h2>
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.{" "}
            <br />
            Necessitatibus eum atque voluptatum <br />
            sequi laudantium perferendis.
          </p>
        </Medic>
        <Links>
          <h3>Useful Links</h3>
          <p>Home</p>
          <p>Services</p>
          <p>Doctors</p>
          <p>BLog</p>
          <p>About</p>
        </Links>
        <Letter>
          <h3>News Letter</h3>
          <p>Subscribe to our newsletter</p>
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </Letter>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 70vh;
  background-color: #273d54;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Medic = styled.div`
  h2 {
    font-size: 15px;
  }
  p {
    font-size: 10px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Links = styled.div`
  h3 {
    font-size: 11px;
  }
  p {
    font-size: 10px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Letter = styled.div`
  h3 {
    font-size: 11px;
  }
  p {
    font-size: 10px;
  }
  button {
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 85px;
    height: 35px;
    color: white;
    background-color: #2f99ff;
    cursor: pointer;
  }
  input {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 30px;
    padding-left: 4px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
