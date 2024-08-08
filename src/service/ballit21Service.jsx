import axios from "axios";

//TODO: Inserir url de deploy

const BASE_URL = "http://localhost:3000";

function postTeams(teams) {
  const promisse = axios.post(`${BASE_URL}/registration`, teams);
  return promisse;
}

function getTeams() {
  const promisse = axios.get(`${BASE_URL}/registration`);
  return promisse;
}

function insertMatches(matches) {
  const promisse = axios.post(`${BASE_URL}/match`, matches);
  return promisse;
}

function updateMatch(body) {
  const promisse = axios.put(`${BASE_URL}/match`, body);
  return promisse;
}

function getMatches() {
  const promisse = axios.get(`${BASE_URL}/matches`);
  return promisse;
}

function getNoWinnerList() {
  console.log("service sem vencedores");
  const promisse = axios.get(`${BASE_URL}/winners`);
  console.log(promisse);
  return promisse;
}

function deleteMatches() {
  const promisse = axios.delete(`${BASE_URL}/matches`);
  return promisse;
}

function getWinners() {
  const promisse = axios.get(`${BASE_URL}/winnerslist`);
  return promisse;
}

export {
  postTeams,
  getTeams,
  insertMatches,
  updateMatch,
  getMatches,
  getNoWinnerList,
  deleteMatches,
  getWinners,
};
