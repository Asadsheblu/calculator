import React, { useState } from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';
import './Stopwatch.css'
const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);
const Stopwatch = () => {
    

    return (
     <div className='stopwatch'>
               <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch"
                             displayCricle={true} color="gray" hintColor="red" fromTime={fromTime}/>
        </div>
    );
};

export default Stopwatch;