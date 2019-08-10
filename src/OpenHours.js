import React, {useState} from 'react';
import {Hours} from './Hours'
import data from './data';

export const OpenHours = () => {
    // set data to state
    const [schedule] = useState(data);

    const daysArray = Object.keys(schedule);

    // Helper functions
    const capitalizeWeekday = (day) => {
        return day.charAt(0).toUpperCase() + day.slice(1)
    };

    const today = () => {
        return new Date().toLocaleString('en-Us', {
            weekday: 'long',
        })
    };

    const renderHours = (values) => {
        // Get time in milliseconds and then get hours in AM/PM format
        const formatAMPM = (time) => {
            // Have to use UTC data otherwise it takes in account time offset
            const utcHours = new Date(time * 1000).getUTCHours();
            // If over 12 then concat PM otherwise concat AM
            return utcHours > 12 ? utcHours - 12 + 'PM' : utcHours + 'AM';
        };
        // If array is empty then restaurant is closed else show open hours
        return values.length === 0 ? <span> {'Closed'} </span> : values.map(time => {
            return (
                <span>
                    {formatAMPM(time.value)}
                    {/*If type is open then add - between values if close empty string */}
                    {time.type === 'open' ? ' - ' : ''}</span>
            )
        })
    };


    // Map over state and return schedule list
    const renderOpenHoursList = daysArray.map((day, index) => {
        console.log('see if works', data[Object.keys(schedule)[index + 1]]);
        return (
            <ul>
                <li key={day}>
                    {capitalizeWeekday(day)}
                    {renderHours(schedule[day])}
                </li>
            </ul>
        );
    });


    return (
        <div>
            {renderOpenHoursList}
        </div>
    )

};