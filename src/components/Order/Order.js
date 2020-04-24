import React from 'react';

import styles from './Order.module.css';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName === 'asalad' ? 'salad' : ingredientName, 
                amount: props.ingredients[ingredientName]
            });
    }
    console.log(props.name);

    const ingredientOutput = ingredients.map(ig => {
        return <span
        style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #cccccc',
            padding: '5px'
        }}
        key={ig.name}>{ig.name} ({ig.amount})</span>
    });

    return (
    <div className={styles.Order}>
        <p>Name: <strong>{props.name}</strong></p>
        <p>Ingredients: {ingredientOutput}</p>
        <p>Price: <strong>USD $ {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
    );
};

export default order;
