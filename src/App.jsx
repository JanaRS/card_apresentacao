import './App.css'
import Card from '../src/components/Card'

function App() {
  
    const user = {
      nome: "Janaína Ramos",
      idade: 37,
      foto: "https://avatars.githubusercontent.com/u/86013968?s=400&u=c227120efabe4d93ef2848988abdc99b2f436901&v=4",
      github: "https://github.com/JanaRS",
      linkedin: "https://www.linkedin.com/in/janaina-ramos-4ba574b3/a",
    }

  return (
    <div>
      <Card user={user}/>
    
    </div>
  )
}

export default App