import React from 'react';
import DisplayContainer from './DisplayContainer.component';

export default function NewExpenseForm() {
  return (
    <div className="ExpenseForm">
      <DisplayContainer logo={true} title="Dec Expense">
        <section className="ExpenseForm--subcontainer">
          <h2>Update Expenses</h2>
          <form>
            {/* <input type="text" name="firstname" placeholder="first name"/>
            <input type="text" name="lastname" placeholder="last name"/>
            <input type="text" name="email" placeholder="email"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="password" name="passwordconf" placeholder="confirm password"/> */}

            <input type="text" name="title" placeholder="expense title"/>
            <input type="text" name="type" placeholder="type of expense"/>
            <input type="text" name="price" placeholder="price per or total"/>
            <input type="text" name="quantity" placeholder="quantity"/>

          </form>

          <section className="ExpenseForm--subcontainer--data">
            <h3>New Expense:</h3>
            <p><span>Total:</span> 000</p>
            <p><span>Current Monthly Total:</span>000</p>
            <p><span>New Monthly Total: </span>000</p>
            <button>Confirm</button>
          </section>
        </section>
      </DisplayContainer>
    </div>
  )
}
