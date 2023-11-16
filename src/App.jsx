import { useState } from 'react';
import './App.css';
import HomeBody from './assets/HomeBody';
import MealPlan from './assets/mealPlans';
import ReasonsNeeded from './assets/ReasonsNeeded';
import RecipeCarousel from './assets/RecipeCarousel';

function App() {
  return (
    <>
      <HomeBody />
      <ReasonsNeeded />
      <MealPlan />
      <RecipeCarousel />
    </>
  )
}

export default App
