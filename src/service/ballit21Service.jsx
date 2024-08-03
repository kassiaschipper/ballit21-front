import axios from "axios";

//TODO: Inserir url de deploy 

 const BASE_URL = "http://localhost:3000";

function postTeams(teams){
    console.log(teams)
    const promisse = axios.post(`${BASE_URL}/registration`, teams);
    return promisse;
}


export{postTeams }