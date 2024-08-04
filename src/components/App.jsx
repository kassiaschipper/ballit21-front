import GlobalStyle from "../assets/style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Matches from "./matches/Matches";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Home />} />
          <Route path="matches" element={<Matches />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
