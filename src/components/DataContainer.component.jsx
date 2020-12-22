import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {setView} from '../redux/actions/index';

function DataContainer(props) {

  const [expList, setExpList] = useState([]);

  const getMonthlyExpenses = () => {
    let list = props.data.monthlyExp.map(exp => {
      return (
        <li>{props.header} {exp.date}: {exp.amount}</li>
      )
    })
    setExpList(list);
  }

  useEffect(() => {
    if(props.data) {
      if (props.data.monthlyExp) {
        getMonthlyExpenses();
      }
    }
  }, []);

  return (
    <div className="DataContainer">
      <h3>{props.header}</h3>

      {props.type === "toDate" ? 
        <ul>
          <li><span>Total:</span> ${props.data.total}</li>
          <li><span>Monthly avg:</span> {props.data.avgMonth}</li>
          <li><span>Highest expense:</span> {props.data.highestExp.month} {props.data.highestExp.amount}</li>
        </ul>
      : 
        props.type === "current" ?
        <div>
          <ul>
            <li><span>Daily avg:</span> {props.data.avgDay}</li>
            <li><span>Weekly avg:</span> {props.data.avgWeek}</li>
            <li><span>Highest expense:</span> {props.data.highestExp}</li>
            <li><span>Total:</span> ${props.data.total}</li>
          </ul>
          <div className="btnContainer">

          <button onClick={() => props.setView('newexp')}>+ Add Expense</button>
          </div>
        </div>
      :
        props.type === "single" ? 
        <ul>
          {expList}
        </ul>
      : props.type === "text" ?
        <div>
          {props.children}
        </div>
      :  <h3>Something went wrong</h3>
      }
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setView: (view) => dispatch(setView(view))
  };
};

const mapStateToProps = (state) => {
  return {
    view: state.view
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);


