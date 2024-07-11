import styled from "styled-components";
import { useState } from "react";
import SideBar from "./SideBar";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoReorderThree } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Medic.</Logo>
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

          <SideNav onClick={handleToggle}>
            <IoReorderThree />
          </SideNav>
        </Wrapper>
        <div>{toggle ? <SideBar /> : null}</div>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  margin-bottom: 100px;
  height: 70px;
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  /* background-color: blue; */
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
const Navigation = styled.div`
  display: flex;
  nav {
    font-weight: 600;
    margin: 0px 10px;
    font-size: 14px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const SideNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;
