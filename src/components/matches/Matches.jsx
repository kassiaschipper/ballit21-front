import styled from "styled-components";
import BallitLogo from "../../assets/images/BallItLogo.png";
import { useLocation } from "react-router-dom";

export default function Matches() {
  const location = useLocation();
  const registrations = location.state?.teams || [];
 
  return (
    <>
      <LogoWrapper>
        <img src={BallitLogo} alt="Logo Ball It"></img>
      </LogoWrapper>
      <TitleWrapper>
        Gerencie as partidas
        <p>Clique nos cards para iniciar a partida que escolher</p>
      </TitleWrapper>
      <MatchesWrapper>
        {registrations.map((_, index) =>
          index % 2 !== 0 ? (
            <></>
          ) : (
            <CardWrapper key={index}>
              <p>
                <span>{registrations[index].name}</span> VS{" "}
                <span>{registrations[index + 1].name}</span>
              </p>
            </CardWrapper>
          )
        )}
        {}
      </MatchesWrapper>
    </>
  );
}

const TitleWrapper = styled.div`
  height: auto;
  width: 70vw;
  margin: 0 auto;
  color: white;
  font-size: 28px;
  text-align: center;
  line-height: 2.5rem;
  margin-top: 10px;

  p {
    font-size: 16px;
    line-height: 1.4rem;
    margin-top: 1%;
    margin-bottom: 1%;
  }
`;
const LogoWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  position: fixed;
  top: 0;
  right: 0;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const MatchesWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
`;
const CardWrapper = styled.div`
  width: 20rem;
  height: 10rem;
  background-color: white;
  border-radius: 15px;
  margin-top: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #007cb8;
    font-size: 1rem;
  }
  span {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;
