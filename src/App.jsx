import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Guide from "./pages/Guide"
import Mortage from "./pages/Mortage"
import EditorLoft from "./pages/EditorLoft"
import Contact from "./pages/Contact"

export default function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/mortage" element={<Mortage />} />
        <Route path="/editorloft" element={<EditorLoft />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  
}
