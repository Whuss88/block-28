import {Routes, Route} from 'react-router-dom'
import Red from "./red.jsx"
import Blue from "./blue.jsx"
import Home from "./home.jsx"


const MainComponent = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue/>} />
        <Route path="/red" element={<Red/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}
export default MainComponent