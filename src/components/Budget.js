import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        //dispatch({
          //  type: 'SET_BUDGET',
        //});
    }
    const maxValue = "20000";
        if(budget > maxValue) {
            alert("The budget value cannot exceed 20,000")
        }
    const minValue = "900";
        if(budget < minValue) {
            alert("You cannot reduce the budget value lower than the spending");
        };
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
