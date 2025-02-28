import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPages"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/contact" Component={ContactPage}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
