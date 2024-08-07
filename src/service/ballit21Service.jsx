import axios from "axios";

//TODO: Inserir url de deploy 

 const BASE_URL = "http://localhost:3000";

function postTeams(teams){
    const promisse = axios.post(`${BASE_URL}/registration`, teams);
    return promisse;
}

function getTeams(){
    const promisse = axios.get(`${BASE_URL}/registration`);
    return promisse;
}

function insertMatches(matches){
    const promisse = axios.post(`${BASE_URL}/match`, matches);
    return promisse;
}

function updateMatch(body){
    const promisse = axios.put(`${BASE_URL}/match`, body);
    return promisse;
}

function getMatches(){
    const promisse = axios.get(`${BASE_URL}/match`);
    return promisse;
}

export{postTeams, getTeams, insertMatches,updateMatch, getMatches}