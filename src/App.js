import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsOriginal from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFood] = useState(foodsOriginal);
  const [searchString, setSearchString] = useState('');
  const displayedFoods = foods.filter((foodEL) => {
    return foodEL.name.includes(searchString);
  });

  const removeFoodCard = (name) => {
    const remainingFood = foods.filter(
      (foodElement) => foodElement.name !== name
    );
    setFood(remainingFood);
  };

  return (
    <div className="App">
      <AddFoodForm setFood={setFood} />
      <Button> Hide Form / Add New Food </Button>
      <Search
        setSearchString={setSearchString}
        searchStringInput={searchString}
      />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {displayedFoods.map((food) => {
          return (
            <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
              removeFoodCard={removeFoodCard}
            />
          );
        })}
      </Row>
    </div>
  );
}
export default App;
