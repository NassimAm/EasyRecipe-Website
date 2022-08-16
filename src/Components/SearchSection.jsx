import React from 'react';
import './style.css';
import RecipeCard from './RecipeCard';

const SearchSection = ({meals}) => {
    return(
        <div>
            <div className='searchsection-cont'>
                <p className='searchsection-title'>Recipes</p>
                <div className='searchsection'>
                    {
                        meals?.length > 0 ?
                        meals.map((meal) => 
                            (
                                <RecipeCard meal={meal}/>
                            )
                        ) : (<></>)
                    }
                </div>
            </div>
        </div>
        
    )
}

export default SearchSection;