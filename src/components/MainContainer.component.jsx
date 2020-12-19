import React from 'react';
import DisplayContainer from './DislayContainer.component';
import DataContainer from './DataContainer.component';

export default function MainContainer() {
  return (
    <div className="MainContainer">
      {/* title will be the user's name passed in from DB call && is a t/f value*/}
      <DisplayContainer title="User Name" logo={true}>
        <DataContainer type="toDate" header="2020 Expenses to date:" data={{avgMonth: 3145.65, highestExp: {month: 'July', amount: 4674.08}, total: 22546.87}}/>
        <DataContainer type="current" header="Current Month [Dec 2020]:" data={{avgDay: 37.5, avgWeek: 645.68, highestExp: 1438.69, total: 5467.34}}/>
      </DisplayContainer>

      <DisplayContainer title="Monthly report" logo={true}>
        <DataContainer type="single" header="Nov" data={{ monthlyExp: [{date: 1, amount: 22.5}, {date: 2, amount: 18.23}, {date: 3, amount: 27.33}]}}/>
        <DataContainer type="single" header="Dec" data={{ monthlyExp: [{date: 1, amount: 22.5}, {date: 2, amount: 18.23}, {date: 3, amount: 27.33}]}}/>
      </DisplayContainer>
    </div>
  )
}
