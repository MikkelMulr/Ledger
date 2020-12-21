import React, {useEffect} from 'react';
import DisplayContainer from './DisplayContainer.component';
import DataContainer from './DataContainer.component';
import Login from './Login.component';
import About from './About.component';
import {connect} from 'react-redux';
import {setView} from '../redux/actions/index';

function MainContainer(props) {

  useEffect(() => {
    console.log("View updated to: " + props.view);
  }, [props.view])

  return (
    <div className="MainContainer">
      {props.view==="home" ?
        <div className="MainContainer--subContainer">
        <DisplayContainer title="User Name" logo={true}>
          <DataContainer type="toDate" header="2020 Expenses to date:" data={{avgMonth: 3145.65, highestExp: {month: 'July', amount: 4674.08}, total: 22546.87}}/>
          <DataContainer type="current" header="Current Month [Dec 2020]:" data={{avgDay: 37.5, avgWeek: 645.68, highestExp: 1438.69, total: 5467.34}}/>
        </DisplayContainer>

        <DisplayContainer title="Monthly report" logo={false}>
          <DataContainer type="single" header="Nov" data={{ monthlyExp: [{date: 1, amount: 22.5}, {date: 2, amount: 18.23}, {date: 3, amount: 27.33}]}}/>
          <DataContainer type="single" header="Dec" data={{ monthlyExp: [{date: 1, amount: 22.5}, {date: 2, amount: 18.23}, {date: 3, amount: 27.33}]}}/>
        </DisplayContainer>
        </div>
      : props.view==="login" ?
        <Login />
      
      : props.view==="about" ?
      <About />

      : <h2>Something went wrong</h2>
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

    export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


