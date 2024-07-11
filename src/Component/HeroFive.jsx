import styled from "styled-components";
import doctor2 from "../assets/doctor2.jpg";
import doctor4 from "../assets/doctor4.jpg";
import doctor5 from "../assets/doctor5.jpg";
import doctor6 from "../assets/doctor6.jpg";

const HeroFive = () => {
  const profileData = [
    {
      profileImage: `${doctor2}`,
      profileName: "Dr. Mark Stuart",
      profileCareer: "Cancer Specialist (Oncologist)",
    },
    {
      profileImage: `${doctor6}`,
      profileName: "Dr. Catherine Clinton",
      profileCareer: "Dental Specialist (Dentist)",
    },
    {
      profileImage: `${doctor5}`,
      profileName: "Dr. Adam Loius",
      profileCareer: "Child Health Specialist (Pediatrician)",
    },
    {
      profileImage: `${doctor4}`,
      profileName: "Dr. Michael Henry",
      profileCareer: "Heart Specialist (Cardiologist)",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Text>
          <h1>
            Our <span style={{ color: "#2f99ff" }}>specialist</span> doctors
          </h1>
        </Text>
        <CardHolder>
          {profileData.map((data, index) => (
            <Card key={index}>
              <div>
                <img src={data.profileImage} alt="" />
              </div>
              <h3>{data.profileName}</h3>
              <p>{data.profileCareer}</p>
            </Card>
          ))}
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default HeroFive;

const Container = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  h1 {
    @media (max-width: 730px) {
      text-align: center;
    }
    @media (max-width: 500px) {
      text-align: center;
    }
  }
`;
const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 598px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  width: 200px;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    /* background-color: yellow; */
  }
  text-align: justify;
  background-color: white;
  margin: 0px 20px;

  h3 {
    font-size: 13px;
    padding-left: 10px;
    margin-bottom: 0px;
  }
  p {
    margin-top: 0px;
    font-size: 10px;
    color: #2f99ff;
    padding-left: 10px;
  }
`;
