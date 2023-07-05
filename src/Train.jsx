import React from "react";

function Train(props)
{
    return(
        <div className="container">
            Train Name:{props.trainName}
            <br></br>
            Train Number:{props.trainNumber}
            <br></br>
            {/* Departure Time Hours:{props.departureTime.Hours}
            <br></br>
            Departure Time Minutes:{props.departureTime.Minutes}
            <br></br>
            Departure Time Seconds:{props.departureTime.Seconds}
            <br></br>
            Seats Available Sleeper:{props.seatsAvailable.sleeper}
            <br></br>
            Seats Available AC:{props.seatsAvailable.AC}
            <br></br>
            Price for Sleeper:{props.price.sleeper}
            <br></br>
            Price for AC:{props.price.AC}
            <br></br> */}
            Delayed By:{props.delayedBy}
            <br></br>
        </div>
    );
}

export default Train;