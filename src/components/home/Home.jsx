import styled from "styled-components";
import BallitLogo from "../../assets/images/BallItLogo.png";
import { useState } from "react";

export default function Home() {
//vai começar com o número mínimo de cadastros dando a possibilidade
//de alterar para 12 ou 16 que são as possibilidades válidas.
const [numberOfTeams, setNumberOfTeams] = useState(8);

const handleButtonClick = (teams) => {
      setNumberOfTeams(teams);
};
  
const registrations = Array.from({ length: numberOfTeams });

return (
    <>
      <LogoWrapper>
        <img src={BallitLogo} alt="Logo Ball It"></img>
      </LogoWrapper>
      <TitleWrapper>
        Bem vindos ao sistema Ball It #21 <br></br>Cadastre os times e gerencie
        as partidas!{" "}
        <p>
          Comece escolhendo quantos times vão participar do campeonato, 8, 12 ou 16 <br></br>
          Quando quiser iniciar o campeonato clique no botão Salvar e Iniciar.
        </p>
      </TitleWrapper>
      <OptionsWrapper>
        <button onClick={() => handleButtonClick(8)}>8 times</button>
        <button onClick={() => handleButtonClick(12)}>12 times</button>
        <button onClick={() => handleButtonClick(16)}>16 times</button>
      </OptionsWrapper>
      {registrations.map((_,index) => (
        <RegistrationWrapper key={index}>
          <TeamWrapper>
            <p>Time #{index+1}</p>
            <input type="text" placeholder="Nome do time" />
            <input type="text" placeholder="Grito de guerra" />
            <input type="text" placeholder="Ano de fundação" />
          </TeamWrapper>
        </RegistrationWrapper>
      ))}
      <ButtonWrapper><button>Salvar e Iniciar</button></ButtonWrapper>
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

const OptionsWrapper = styled.div`
width: 55%;
height: auto;
margin: 0 auto;
display: flex;
justify-content: space-around;
margin-bottom: 3%;
button{
    margin-top: 10px;
    width: 10rem;
    color: white;
    font-size: 18px;
    background-color: darkgrey;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

`;
const RegistrationWrapper = styled.div`
  width: 100%;
  height: 70%;
  text-align: center;
  padding-top: 20px;
  display: flex;
  justify-content: center;
   
`;
const TeamWrapper = styled.div`
height: 6vh;
width: 70%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

p{
    width: 5rem;
    color:white;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    font-weight: 700;
}

 input {
    background-color: white;
    width: 20vw;
    height: 6vh;
    font-size: 1rem;
    margin-bottom: 2%;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 5px;
    text-align: center;

    &::placeholder {
      color: rgb(0, 0, 0, 0.3);
      padding-left: 2px;
    }
  }
 
`;

const ButtonWrapper = styled.div`
width: 50%;
margin: 0 auto;
height: 2rem;
display: flex;
justify-content: center;
margin-top: 1%;
margin-bottom: 1%;

button{
    background-color: white;
    width: 35%;
    color: #007CB8;
    border:none;
    border-radius: 15px;
    font-size: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    
}

`;
