import React from 'react';
import searchIcon from '../ressources/white_search.png';

const HeroSection = ({image,term,setSearchTerm,searchMeals}) => {
    return(
        <div className='herosection'>
            <div className='herosection-left'>
                <p className='herosection-title'>Be The Chef You Always Wanted To Be</p>
                <p className='herosection-subtitle'>At EasyRecipe, you will find all types of recipes to make: beginner, intermediate and advanced recipe as you wish.</p>
                <div className='herosection-button'>
                    <img src={searchIcon} alt="Search" />
                    <input type="text" placeholder='Search for a recipe ...' onChange={(e) => {
                        setSearchTerm(e.target.value);
                        searchMeals(term)
                    }} />
                </div>
                    
            </div>
            <div className='herosection-right'>
                <img className='herosection-image' src={image} alt="Food Image" />
            </div>
        </div>
    );
}

export default HeroSection;