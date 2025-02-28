import { BrowserRouter, Routes, Route } from "react-router-dom"
//importazione pages
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPages"
import PostList from "./pages/PostList"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/chiSiamo" Component={ContactPage}/>
        <Route path="/list" Component={PostList}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
