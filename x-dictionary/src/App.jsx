import XDictionary from "./Component/XDictionary"

const App = () => {

  const dictionary = [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  

  return (
    <div>
      <XDictionary dictionary = {dictionary}/>
    </div>
  )
}

export default App