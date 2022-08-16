import './App.css';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import SearchSection from './Components/SearchSection';
import hero0 from './ressources/hero0.jpg';
import hero1 from './ressources/hero1.jpg';
import hero2 from './ressources/hero2.jpg';
import hero3 from './ressources/hero3.jpg';
import hero4 from './ressources/hero4.jpg';
import {useEffect,useState} from 'react';

function App() {
  const [heroImage,setHeroImage] = useState(hero0);
  const heroImages = [
    hero0, hero1, hero2, hero3, hero4
  ]
  let heroCount = 0;
  
  const [searchTerm,setSearchTerm] = useState("");
  const [meals,setMeals] = useState([])

  const searchMeals = async (term) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    // console.log((await fetch("http://www.omdbapi.com/?apikey=dd2fbe5c&s=Batman")).json())
    const data = await response.json();
    
    setMeals(data.meals)
  }

  useEffect(() => {
    setInterval(async () => {
      if(heroCount >= heroImages.length)
      {
        heroCount = 0;
      }
      setHeroImage(heroImages[heroCount]);
      heroCount += 1;
    },5000);
    searchMeals("a");
  },[]);

  return (
    <div className="App">
      <NavBar/>
      <HeroSection image={heroImage} term={searchTerm} setSearchTerm={setSearchTerm} searchMeals={searchMeals}/>
      <SearchSection meals={meals}/>
    </div>
  );
}

export default App;
