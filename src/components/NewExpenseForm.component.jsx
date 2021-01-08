import React, {useState, useEffect} from 'react';
import DisplayContainer from './DisplayContainer.component';

export default function NewExpenseForm() {
  const [total, setTotal] = useState(0);
  const temp_currentMonthly = useState(1337.69);
  const [type, setType] = useState('none');

  useEffect(() => {
  }, []);

  return (
    <div className="ExpenseForm">
      <DisplayContainer logo={true} title="Dec Expense">
        <section className="ExpenseForm--subcontainer">
          <h2>Update Expenses</h2>
          <form>
            <input type="text" name="title" placeholder="expense title"/>
              <h2>Type of expense: </h2>
            <div className="types">
              <input type="radio" name="expenseType" id="type-bill" value="bill" onClick={(e) => setType(e.target.value)}/>
              <label htmlFor="type-bill">Bill</label>
              <input type="radio" name="expenseType" id="type-purchase" value="purchase" onClick={(e) => setType(e.target.value)}/>
              <label htmlFor="type-purchase">Purchase</label>
              <input type="radio" name="expenseType" id="type-other" value="business" onClick={(e) => setType(e.target.value)}/>
              <label htmlFor="type-business">Business</label>
              <input type="radio" name="expenseType" id="type-purchase" value="other" onClick={(e) => setType(e.target.value)}/>
              <label htmlFor="type-other">Other</label>
            </div>
            <input type="text" name="price" placeholder="total price" onChange={(e) => setTotal(parseFloat(e.target.value))}/>


          </form>

          <section className="ExpenseForm--subcontainer--data">
            <h3>New Expense:</h3> 
            <p><span>Total: </span>${total}</p>
            <p><span>Current Monthly Total: </span>${temp_currentMonthly}</p>
            <p><span>New Monthly Total: </span>${(parseFloat(total) + parseFloat(temp_currentMonthly)).toFixed(2)}</p>
            <button>Confirm</button>
            <button>Cancel</button>
          </section>
        </section>
      </DisplayContainer>
    </div>
  )
}
