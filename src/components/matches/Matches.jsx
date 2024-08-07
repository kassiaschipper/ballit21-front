import styled from "styled-components";
import BallitLogo from "../../assets/images/BallItLogo.png";
import { useLocation } from "react-router-dom";
//import { useEffect } from "react";
//import { insertMatches } from "../../service/ballit21Service";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//import { getMatchById } from "../../service/ballit21Service";

export default function Matches() {
  const location = useLocation();
  const registrations = location.state?.teams || [];

  const navigate = useNavigate();

  function handleNavigation(match) {
    if(match.winner !== null) {
      alert('Jogo finalizado');
    }
    else {
      navigate(`/match/${match.id}`, { state: {match: match} });
    }
  }
  
  //TODO
  //verifico se todos os matches já winner
  //se sim
 //pego os vencedores da rodada
 //apago a tabela matches
 //embaralho os vencedores
 //insiro em macthes
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
        {registrations.map(
          (_, index) => (
           registrations[index].winner === null ? (
            <CardWrapper
              key={registrations[index]}
              onClick={() =>handleNavigation(registrations[index])}
            >
              <p>
                {}
                <span>{registrations[index].teama_name}</span> VS{" "}
                <span>{registrations[index].teamb_name}</span>
              </p>
          
            </CardWrapper>) :<> <WinnerWrapper onClick={()=>handleNavigation(registrations[index])}><p>Essa partida foi encerrada!</p> <span>O time vencedor é : <h1>{registrations[index].winner}</h1></span></WinnerWrapper></>

          )
        )}
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

const WinnerWrapper = styled.div`
  width: 20rem;
  height: 10rem;
  background-color: #e9e9e9;
  border-radius: 15px;
  margin-top: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color : #007cb8;
 
  p{
    margin-bottom: 1rem;
    font-size: 20px;
    color: black;
  };
  span{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;

  }
  h1{
    font-size: 24px;
    padding-left: 0.5rem;
  }
`;