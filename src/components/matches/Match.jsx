import styled from "styled-components";
import BallitLogo from "../../assets/images/BallItLogo.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMatches, updateMatch } from "../../service/ballit21Service";
 import { useNavigate } from "react-router-dom";

export default function Match() {
  const location = useLocation();
  const [match, setMatch] = useState(location.state?.match || []);
  const [blotA, setBlotA] = useState(0);
  const [blotB, setBlotB] = useState(0);
  const [plifA, setPlifA] = useState(0);
  const [plifB, setPlifB] = useState(0);
  const [punishmentA, setPunishmentA] = useState(0);
  const [punishmentB, setPunishmentB] = useState(0);
  const [totalA, setTotalA] = useState(50);
  const [totalB, setTotalB] = useState(50);
  //const [listOfMatches, setListOfMatches] = useState();
  const navigate = useNavigate();

 useEffect(() => {
    handleScore();
  }, [blotA, blotB, plifA, plifB, punishmentA, punishmentB]);

  function handleScore() {
    setTotalA(50 + blotA * 5 + plifA * -1 + punishmentA * -10);
    setTotalB(50 + blotB * 5 + plifB * -1 + punishmentB * -10);
  }

  
  function finishMatch (){
    let  winner = null;
    
    if(totalA === totalB){
      alert("deu empate faixa");      
      return
    } 
    if (totalA > totalB) {
      alert(`Time ${match.teama_name} é o vencedor`);
      winner = match.teama_name;
    } else {
      alert(`Time ${match.teamb_name} é o vencedor`);
      winner = match.teamb_name;
    }

    let body = {matchId:match.id ,teama_blot: blotA, teama_plif: plifA, teama_punishment: punishmentA, teamb_blot: blotB, teamb_plif:plifB, teamb_punishment:punishmentB, winner:winner};
    
    updateMatch(body).then(() => {
      getMatches().then((res) => {
        console.log(res.data)
        navigate("/matches", { state: {teams: res.data} });
        //setListOfMatches(res.data);
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });   

  }


  return (
    <>
      <LogoWrapper>
        <img src={BallitLogo} alt="Logo Ball It"></img>
      </LogoWrapper>
      <TitleWrapper>
        <h1>Gerencie a partida</h1>
        <h2>Compute os pontos e confira o vencedor</h2>
      </TitleWrapper>
      <CardsWrapper>
        <TeamCard>
          <h1>{match.teama_name}</h1> <br />
          <p>
            <button onClick={() => setBlotA(blotA + 1)}>Blots</button>
            {blotA}
          </p>{" "}
          <br />
          <p>
            <button onClick={() => setPlifA(plifA + 1)}>Plifs</button>
            {plifA}
          </p>{" "}
          <br />
          <p>
            <button onClick={() => setPunishmentA(punishmentA + 1)}>
              advrungh
            </button>
            {punishmentA}
          </p>
          <span>{totalA}</span>
        </TeamCard>
        <span>VS</span>
        <TeamCard>
          <h1>{match.teamb_name}</h1> <br />
          <p>
            <button onClick={() => setBlotB(blotB + 1)}>Blots</button>
            {blotB}
          </p>{" "}
          <br />
          <p>
            <button onClick={() => setPlifB(plifB + 1)}>Plifs</button>
            {plifB}
          </p>{" "}
          <br />
          <p>
            {" "}
            <button onClick={() => setPunishmentB(punishmentB + 1)}>
              advrungh{" "}
            </button>
            {punishmentB}
          </p>
          <span>{totalB}</span>
        </TeamCard>
      </CardsWrapper>
      <ButtonWrapper>
        <button onClick={() => finishMatch()}>Finalizar a partida</button>
      </ButtonWrapper>
    </>
  );
}

const TitleWrapper = styled.div`
  height: auto;
  width: 100vw;
  margin: 0 auto;
  color: white;
  font-size: 28px;
  text-align: center;
  line-height: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 34px;
    line-height: 1.4rem;
    margin-top: 1%;
    margin-bottom: 1.5%;
  }
  h2 {
    font-size: 24px;
  }

  span {
    font-size: 24px;
  }

  h3 {
    font-size: 40px;
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

const CardsWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: white;
    font-size: 4rem;
  }
`;

const TeamCard = styled.div`
  background-color: white;
  width: 20rem;
  height: 20rem;
  border-radius: 15px;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;

  h1 {
    color: #007cb8;
    font-size: 28px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  button {
    border: none;
    border-radius: 5px;
    width: 5rem;
    height: 2rem;
    margin-right: 1rem;
    color: #007cb8;
    font-size: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.17);
    cursor: pointer;
  }

  span {
    background-color: #007cb8;
    width: 5rem;
    border-radius: 5px;
    font-size: 3rem;
    margin: 0 auto;
    margin-top: 2rem;
  }
`;
const ButtonWrapper = styled.div`
  width: 50%;
  height: auto;
  margin: 0 auto;
  margin-top: 3rem;
  text-align: center;

  button {
    width: 15rem;
    height: 3rem;
    font-size: 1.3rem;
    background-color: white;
    border: none;
    border-radius: 5px;
    color: #007cb8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;
