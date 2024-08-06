import GlobalStyle from "../assets/style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Matches from "./matches/Matches";
import Match from "./matches/Match";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />          
          <Route path="/match/:id" element={<Match />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}
