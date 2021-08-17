// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import React from 'react';


function App() {

  const expenses = [
    {title : "Car Insurence" , amount : 125.36 , date : new Date(2021 , 2 , 15)},
    {title : "Doctor" , amount : 257.36 , date : new Date(2022 , 3 , 16)},
    {title : "Grocery" , amount : 986.36 , date : new Date(2023 , 4 , 17)},
    {title : "Pet Food" , amount : 684.36 , date : new Date(2024 , 5 , 18)}
  ];


  return (
    <div>
      <h2>
        And I am Iron Man
      </h2>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
