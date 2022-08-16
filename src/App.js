import './App.css';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import SearchSection from './Components/SearchSection';
import RecipePopUp from './Components/RecipePopUp';
import Footer from './Components/Footer';
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
  const [meals,setMeals] = useState([]);
  const [searchDone,setSearchDone] = useState(true);
  const [enablePopUp,setEnablePopUp] = useState(false);
  const [mealPopUp,setMealPopUp] = useState(null);

  const searchMeals = async (term) => {
    setSearchDone(false);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    const data = await response.json();
    
    setMeals(data.meals);
    setSearchDone(true);
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
      <RecipePopUp enabled={enablePopUp} meal={mealPopUp} setEnablePopUp={setEnablePopUp} setMealPopUp={setMealPopUp}/>
      <HeroSection image={heroImage} term={searchTerm} setSearchTerm={setSearchTerm} searchMeals={searchMeals}/>
      <SearchSection meals={meals} searchDone={searchDone} searchMeals={searchMeals} setEnablePopUp={setEnablePopUp} setMealPopUp={setMealPopUp}/>
      <Footer/>
    </div>
  );
}

export default App;
