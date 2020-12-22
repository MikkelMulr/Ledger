import React, {useState, useEffect} from 'react';

export default function DataContainer({header, data, type, children }) {

  const [expList, setExpList] = useState([]);

  const getMonthlyExpenses = () => {
    let list = data.monthlyExp.map(exp => {
      return (
        <li>{header} {exp.date}: {exp.amount}</li>
      )
    })
    setExpList(list);
  }

  useEffect(() => {
    if(data) {
      if (data.monthlyExp) {
        getMonthlyExpenses();
      }
    }
  }, []);

  return (
    <div className="DataContainer">
      <h3>{header}</h3>

      {type === "toDate" ? 
        <ul>
          <li><span>Total:</span> ${data.total}</li>
          <li><span>Monthly avg:</span> {data.avgMonth}</li>
          <li><span>Highest expense:</span> {data.highestExp.month} {data.highestExp.amount}</li>
        </ul>
      : 
        type === "current" ?
        <div>
          <ul>
            <li><span>Daily avg:</span> {data.avgDay}</li>
            <li><span>Weekly avg:</span> {data.avgWeek}</li>
            <li><span>Highest expense:</span> {data.highestExp}</li>
            <li><span>Total:</span> ${data.total}</li>
          </ul>
          <div className="btnContainer">

          <button>+ Add Expense</button>
          </div>
        </div>
      :
        type === "single" ? 
        <ul>
          {expList}
        </ul>
      : type === "text" ?
        <div>
          {children}
        </div>
      :  <h3>Something went wrong</h3>
      }
    </div>
  )
}
