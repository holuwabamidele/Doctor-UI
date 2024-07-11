import styled from "styled-components";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <nav>Home</nav>
          <nav>About Us</nav>
          <nav>Doctors</nav>
          <nav>Services</nav>
          <nav>Departments</nav>
          <nav>Others</nav>
        </Navigation>
        <Button>
          {" "}
          <BiSolidMessageRoundedDots style={{ marginRight: "5px" }} /> Contact
          Us
        </Button>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  position: fixed;
  height: 40vh;
  width: 150px;
  background-color: #2f99ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Navigation = styled.div`
  text-align: center;
  nav {
    font-weight: 600;
    margin: 10px 0px;
    font-size: 14px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  font-family: Montserrat;
  font-weight: 700;
  border: 1px solid #2f99ff;
  border-radius: 30px;
  height: 35px;
  width: 130px;
  color: #2f99ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
