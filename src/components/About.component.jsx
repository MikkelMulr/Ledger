import React from 'react';
import DisplayContainer from './DisplayContainer.component';
import DataContainer from './DataContainer.component';


export default function About() {
  return (
    <div className="About">
      <DisplayContainer logo={true} title="About">

          <section className="About--main">
            <DataContainer type="text" header="What is Ledger?">
              <p>Ledger is a no-nonsense, easy to use expense tracker for people who want to understand where their money is going. </p>
            </DataContainer>

            <DataContainer type="text" header="">
              <p>Created in 2020 by Mike Mueller, a developer from Toronto, Ontario, initially as a tool to track simple in-house expenses, but made it public soon after for everyone to utilize.</p>
              <p><sub>Wow! What a nice guy...</sub></p>
              <p>Only kidding, but thank you for giving it a shot!</p>
            </DataContainer>
          </section>
        </DisplayContainer>
    </div>
  )
}
