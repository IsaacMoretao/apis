import { Routes, Route } from "react-router";
import { Hook } from "./ApiWithHooks/ApiHook";
import { Repo } from "./WithReactQuery/Repo";
import { Repos } from "./WithReactQuery/Repos";

export function App() {
  return(
    <Routes>
      <Route path="/" element={<Repos/>}/>
      <Route path="/Repos/*" element={<Repo/>}/>
      <Route path="/Hook" element={<Hook/>}/>
    </Routes>
  )
}
