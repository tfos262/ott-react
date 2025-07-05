

import React from 'react';
import CalendarComponent from './CalendarComponent';
import TimeslotComponent from './TimeslotComponent';

// Define dummy values for time and num_golfers or import them as needed
const time = "08:00 AM";
const num_golfers = 4;

function TeeTimes() {
    return (
        <>
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                background: `url(${require('./golf_login.jpg')}) center/cover no-repeat`
            }}>



                <div style={{ marginLeft: '2rem', marginRight: '2rem' }}></div>
                <div className="tee-times">
                    {/* <h1>Tee Times</h1> */}
                </div>
                <div
                    className="App mt-5 mb-5"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        gap: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        width: '100%',
                    }}
                >
                    <CalendarComponent />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '60%' }}>
                        <TimeslotComponent time={time} num_golfers={num_golfers} />
                        <TimeslotComponent time="8:15 AM" num_golfers="2" />
                        <TimeslotComponent time="8:30 AM" num_golfers="3" />
                        <TimeslotComponent time="8:45 AM" num_golfers="2" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default TeeTimes;