import styled from "styled-components";
import BallitLogo from "../../assets/images/BallItLogo.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
//import { insertMatches } from "../../service/ballit21Service";
// import { useNavigate } from "react-router-dom";

export default function Match() {
  const location = useLocation();
  const [match,setMatch] = useState(location.state?.match || []);

  // Chega só o id
  // Busca o match pelo id
  // Mostra as informações da partida
  // Ao clicar em algum botão, tem que dar update no match e chamar o get de novo, para atualizar as informações do jogo

  return (
    <>
      <LogoWrapper>
        <img src={BallitLogo} alt="Logo Ball It"></img>
      </LogoWrapper>
      <TitleWrapper>
        {match.teama_name} VS {match.teamb_name}
      </TitleWrapper>
       {match.teama_blot} - {match.teamb_blot}<br/>
       {match.teama_plif} - {match.teamb_plif}<br/>
       {match.teama_punishment} - {match.teamb_punishment}

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

