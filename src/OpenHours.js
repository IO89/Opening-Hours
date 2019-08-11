import React, {useState} from 'react';
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

    const formatHours = (days) => {
        // Get time in milliseconds and then get hours in AM/PM format
        const formatAMPM = (time) => {
            // Have to use UTC data otherwise it takes in account time offset
            const utcHours = new Date(time * 1000).getUTCHours();
            // If over 12 then concat PM otherwise concat AM
            return utcHours > 12 ? utcHours - 12 + 'PM' : utcHours + 'AM';
        };

        return (
            <span>
                    {formatAMPM(days.value)}
                {/*If type is open then add - between values if close empty string */}
                {days.type === 'open' ? ' - ' : ''}</span>
        )

    };
    // This one is tricky!
    // Compare day an next day and move close time to previous day
    const renderOpenHours = (day, nextDay) => {
        let acc = [];
        let isOpen = false;

        for (const item of day) {
            // If restaurant has type open or has type close but still open for today,push formatted hours to acc
            if (item.type === 'open') {
                acc.push(formatHours(item))
            } else if (item.type === 'close' && isOpen) {
                acc.push(formatHours(item))
            }
            // Set flag to true if type open
            isOpen = item.type === 'open';
        }
        // If still open take closing time from next day
        if (isOpen) {
            acc.push(formatHours(nextDay[0]))
        }
        // Empty array if restaurant is closed fro today
        return day.length === 0 ? <td className="ui right aligned disabled">Closed</td> :
            <td className="ui right aligned"><b>{acc}</b></td>;
    };


    // Map over state and return schedule list
    const renderOpenHoursList = daysArray.map((day, index) => {
        return (
            <table className="ui unstackable very basic table">
                <tbody>
                <tr key={day}>
                    <td className="ui left aligned"><b>{capitalizeWeekday(day)}</b></td>
                    {/* Also tricky!*/}
                    {/*call renderOpenHours with day and next day*/}
                    {renderOpenHours(schedule[day], schedule[daysArray[index + 1]])}
                </tr>
                </tbody>
            </table>
        );
    });


    return (
        <div>
            {renderOpenHoursList}
        </div>
    )

};