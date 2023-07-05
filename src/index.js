import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import trains from "./trains";
import Train from "./Train";
function createTrain(trains)
{
  console.log(trains);
    return(
        <Train 
        trainNumber={trains.trainNumber}
        trainName={trains.trainName}
        // departureTime={trains.departureTime.Hours}
        // departureMinutes={trains.departureTime.Minutes}
        // departureSeconds={trains.departureTime.Seconds}
        // seatsAvailable={trains.seatsAvailable.sleeper}
        // seatsAvailabelAC={trains.seatsAvailable.AC}
        // priceSleeper={trains.price.sleeper}
        // priceAC={trains.price.AC}
        delayedBy={trains.delayedBy}
        />
    );
}
ReactDOM.render(<div>
  <App/>
  <h1>Available Trains</h1>
  <div>
  {trains.map(createTrain)}
  </div>
   
  </div>,document.getElementById("root"));