import React from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

const AddFoodForm = ({ setFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setFood((currentState) => {
      const copy = [...currentState];
      copy.unshift({ name, image, calories, servings });
      return copy;
    });
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  const handleNameContentChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleImageContentChange = ({ target: { value } }) => {
    setImage(value);
  };

  const handleCaloriesContentChange = ({ target: { value } }) => {
    setCalories(value);
  };

  const handleServingContentChange = ({ target: { value } }) => {
    setServings(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameContentChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageContentChange} />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={handleCaloriesContentChange}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={handleServingContentChange}
      />

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
