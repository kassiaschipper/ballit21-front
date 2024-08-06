import styled from "styled-components";
import BallitLogo from "../../assets/images/BallItLogo.png";
import { useState } from "react";
import { insertMatches, postTeams } from "../../service/ballit21Service";
import { useNavigate } from "react-router-dom";

export default function Home() {
  //vai começar com o número mínimo de cadastros dando a possibilidade
  //de alterar para 12 ou 16 que são as possibilidades válidas.
  const [numberOfTeams, setNumberOfTeams] = useState(8);
  const [disabledInput, setDisabledInput] = useState(false);

  //vai inicializar o estado de teams com uma lista de 8 objetos, número mínimo de times,
  //Cada objeto, inicia com os campos vazios, contém as propriedades que eu preciso para cadastrar um time
  const [teams, setTeams] = useState(
    Array.from({ length: 8 }, () => ({
      name: "",
      war_cry: "",
      year: "",
    }))
  );
  const navigate = useNavigate();

  //Quando o botão for clicado vai receber o número de times escolhido, 8,12,16
  //é atualizado e cria uma nova lista de times com o tamanho de teamsOptions
  const handleButtonClick = (teamsOptions) => {
    setNumberOfTeams(teamsOptions);
    setTeams(
      Array.from({ length: teamsOptions }, () => ({
        name: "",
        war_cry: "",
        year: "",
      }))
    );
  };

  //Vai atualizar os estados dos teams quando forem inseridas os inputs no formulário
  const handleInputChange = (index, field, value) => {
    const newTeams = [...teams];
    newTeams[index][field] = value;
    setTeams(newTeams);
  };

  const registrations = Array.from({ length: numberOfTeams });

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    postTeams(teams)
      .then(() => {
        let shuffled = shuffleTeams(teams);
        sendMatchesData(shuffled);
      })
      .catch((error) => {
        alert(error);
      });
  }

  //função para embaralhar o array com os times
  function shuffleTeams(teams) {
    // Itera sobre cada elemento do array a partir do último até o primeiro
    for (let i = teams.length - 1; i > 0; i--) {
      // Seleciona um índice aleatório entre 0 e i
      let j = Math.floor(Math.random() * (i + 1));
      // Troca os elementos teams[i] e teams[j]
      let temp = teams[i];
      teams[i] = teams[j];
      teams[j] = temp;
    }
    // Retorna o array embaralhado
    return teams;
  }

  function creatingMatches(shuffledTeams) {
    let newMatches = [];
    for (let i = 0; i < shuffledTeams.length - 1; i += 2) {
      newMatches.push({
        teamA_name: shuffledTeams[i].name,
        teamB_name: shuffledTeams[i + 1].name,
      });
    }
    return newMatches;
  }
  function sendMatchesData(shuffledTeams) {
    let matches = creatingMatches(shuffledTeams);
    insertMatches(matches).then((res) => {
      navigate("/matches", { state: { teams: res.data.data } });
    }).catch((error) => {
      alert(error);
    });
  }

  return (
    <>
      <LogoWrapper>
        <img src={BallitLogo} alt="Logo Ball It"></img>
      </LogoWrapper>
      <TitleWrapper>
        Bem vindos ao sistema Ball It #21 <br></br>Cadastre os times e gerencie
        as partidas!{" "}
        <p>
          Comece escolhendo quantos times vão participar do campeonato, 8, 12 ou
          16 <br></br>
          Quando quiser iniciar o campeonato clique no botão Salvar e Iniciar.
        </p>
      </TitleWrapper>
      <OptionsWrapper>
        <button onClick={() => handleButtonClick(8)}>8 times</button>
        <button onClick={() => handleButtonClick(12)}>12 times</button>
        <button onClick={() => handleButtonClick(16)}>16 times</button>
      </OptionsWrapper>
      <form onSubmit={sendForm}>
        {registrations.map((_, index) => (
          <RegistrationWrapper key={index}>
            <TeamWrapper>
              <p>Time #{index + 1}</p>
              <input
                type="text"
                placeholder="Nome do time"
                maxLength={50}
                value={teams[index].name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                required
              />
              <input
                type="text"
                placeholder="Grito de guerra"
                maxLength={300}
                value={teams[index].war_cry}
                onChange={(e) =>
                  handleInputChange(index, "war_cry", e.target.value)
                }
                required
              />
              <input
                type="text"
                placeholder="Ano de fundação"
                value={teams[index].year}
                onChange={(e) =>
                  handleInputChange(index, "year", e.target.value)
                }
                maxLength={4}
                required
              />
            </TeamWrapper>
          </RegistrationWrapper>
        ))}
        <ButtonWrapper>
          <button
            type="submit"
            disabled={disabledInput}
          >
            Salvar e Iniciar
          </button>
        </ButtonWrapper>
      </form>
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
  button {
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
  padding-right: 45px;
`;
const TeamWrapper = styled.div`
  height: 6vh;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    width: 5rem;
    color: white;
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

  button {
    background-color: white;
    width: 35%;
    color: #007cb8;
    border: none;
    border-radius: 15px;
    font-size: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;
