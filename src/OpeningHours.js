import React, {useState} from 'react';
import hours from './hours';

export const OpeningHours = () => {
    const [schedule] = useState(hours);

    console.log(schedule);

    const renderDays = Object.keys(schedule).map(key =>
        <li key={key}>
            <>{key}</>
        </li>
    );
    // Helper functions

    const isOpen = (values) => {
        // Get time in milliseconds and then get hours in AM/PM format
        const formatAMPM = (time) => {
            return new Date(time * 1000).toLocaleString('en-US', {
                hour: 'numeric',
                hour12: true
            })
        };
        // If array is empty then restaurant is closed else show open close hours
        return values.length === 0 ? <span> {'Closed'}</span> : values.map((time, index) => <span
            key={index}>{`${time.type} - ${formatAMPM(time.value)} `}</span>)
    };

    const capitalizeFirstLetter = (day) =>{
        return day.charAt(0).toUpperCase() + day.slice(1)
    };

    const renderOpenHours = Object.entries(schedule).map(([day, values]) => {
        return (
            <div key={day}>{capitalizeFirstLetter(day)} : {isOpen(values)} </div>
        );
    });


    return (
        <div>
            <h3>Opening hours</h3>
            {renderOpenHours}
        </div>
    )

};