import { useState } from 'react';
import './App.css';
import HomeBody from './assets/HomeBody';
import MealPlan from './assets/mealPlans';
import ReasonsNeeded from './assets/ReasonsNeeded';

function App() {
  return (
    <>
      <HomeBody />
      <ReasonsNeeded />
      <MealPlan />
    </>
  )
}

export default App
