import './App.css'
import { Content } from './components/Content'
// import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useState, createContext } from "react"
import { items } from "./utils/items";

export const TotalContext = createContext()

function App() {

  const [totalCountItem, setTotalCountItem] = useState(0);
  const [totalMeters, setTotalMeters] = useState(0);
  
  return (
    <TotalContext.Provider value={{
        totalCountItem, 
        setTotalCountItem, 
        totalMeters, 
        setTotalMeters, 
        items
      }}
    >
      <Header />
      <Content />
      {/* <Footer /> */}
    </TotalContext.Provider>
  )
}

export default App
