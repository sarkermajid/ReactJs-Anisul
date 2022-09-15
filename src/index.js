import React from 'react';
import ReactDOM from 'react-dom/client';

const des = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, est eius ea nobis nostrum eveniet in perferendis maiores dicta, ducimus rem temporibus obcaecati error! Est ut nobis quis dolore inventore.";
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
      <h1>React Tutorial With Anisul Islam</h1>
      <p>{des}</p>
      <span>{currentDay + "/" + currentMonth + "/" + currentYear}</span>
  </div>
);