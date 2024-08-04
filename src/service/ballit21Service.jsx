import axios from "axios";

//TODO: Inserir url de deploy 

 const BASE_URL = "http://localhost:3000";

function postTeams(teams){
    const promisse = axios.post(`${BASE_URL}/registration`, teams);
    return promisse;
}

function getTeams(){
    const promisse = axios.get(`${BASE_URL}/registration`)
    return promisse
}


export{postTeams, getTeams }