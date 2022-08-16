import React from 'react';
import './style.css';
import RecipeCard from './RecipeCard';
import spinner from '../ressources/sand-timer.gif';

const SearchSection = ({meals,searchDone}) => {
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
                                    <RecipeCard meal={meal}/>
                                )
                            ) : (
                                <div>
                                    <p>No Recipe Found</p>
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