import { Routes, Route } from "react-router-dom";
import './assets/styles/main.scss'
import HomePage from "../pages/Homepage";

function App() {
  

  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage/>} >
        </Route>
      </Routes>
    </>
  )
}

export default App
