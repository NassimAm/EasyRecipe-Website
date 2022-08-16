import React from 'react';
import './style.css';
import RecipeCard from './RecipeCard';
import spinner from '../ressources/loading.gif';
import notFoundImg from '../ressources/recipeNotFound.png';

const SearchSection = ({meals,searchDone,setEnablePopUp,setMealPopUp}) => {
    return(
        <div>
            <div className='searchsection-cont'>
                <p className='searchsection-title'>Recipes</p>
                <div className='searchsection'>
                    {
                        searchDone ?
                            meals?.length > 0 ?
                            meals.map((meal) => 
                                (
                                    <RecipeCard meal={meal} setEnablePopUp={setEnablePopUp} setMealPopUp={setMealPopUp}/>
                                )
                            ) : (
                                <div className='notFound-cont'>
                                    <img className='notFound-img' src={notFoundImg} alt="Recipe Not Found" />
                                </div>
                            )
                        : (
                            <div className='searchsection-spinner-cont'>
                                <img className='spinner' src={spinner} alt="Loading" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        
    )
}

export default SearchSection;