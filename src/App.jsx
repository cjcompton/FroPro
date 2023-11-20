import { useState } from 'react';
import './App.css';
import BottomStuff from './assets/BottomStuff';
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
      <BottomStuff />
    </>
  )
}

export default App
