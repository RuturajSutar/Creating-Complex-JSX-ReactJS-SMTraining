import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React from 'react';


function ExpenseItem(props){

    // const expenseDate = new Date(2021 , 2 , 28);
    // const expenseTitle = "Car Insurence";
    // const expenseAmount = 2000;

    // const month = props.date.toLocaleString('en-US' , {month : 'long'});
    // const day = props.date.toLocaleString('en-US' , {day : '2-digit'});
    // const year = props.date.getFullYear();

    return (
    // <div className = "expense-item">
    //     <div>March 15, 2001</div>
    //     <div className = "expense-item__description">
    //         <h2>Car Insurance</h2>
    //         <div className = "expense-item__price">1000$</div>
    //     </div>
    // </div>

    // <div className = "expense-item">
    //     <div>
    //         <div>{month}</div>
    //         <div>{year}</div>
    //         <div>{day}</div>
    //     </div>
    //     <div className = "expense-item__description">
    //         <h2>{props.title}</h2>
    //         <div className = "expense-item__price">${props.amount}</div>
    //     </div>
    // </div>


    <Card className = "expense-item">
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className = "expense-item__description">
            <h2>{props.title}</h2>
            <div className = "expense-item__price">${props.amount}</div>
        </div>
    </Card>

    );
}

export default ExpenseItem;