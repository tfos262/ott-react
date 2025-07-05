import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TeeTimeConfirmation() {
    const location = useLocation();
    console.log('Location object:', location);

    const [confirmationMessage, setConfirmationMessage] = React.useState('');;
    const { time, num_golfers } = location.state || {};

    useEffect(() => {
        console.log(time, num_golfers)
        if (time && num_golfers) {
            setConfirmationMessage(`Your tee time is confirmed for ${time} with ${num_golfers} golfers.`);
        } else {
            setConfirmationMessage('Please select a tee time and number of golfers.');
        }
    }, [time, num_golfers]);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `url(${require('./golf_login.jpg')}) center/cover no-repeat`
        }}>

            <div style={{
                background: 'rgba(255,255,255,0.90)',
                padding: '1.5rem 2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                minWidth: '350px',
                marginLeft: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h3>TeeTime Reservation</h3>
                <h4 style={{marginTop: '2rem'}}>{time}</h4>
                <form>
                    <div style={{ marginTop: '2rem', marginBottom: '1rem', width: '100%' }}>
                        <label htmlFor="num_golfers" style={{ display: 'block', marginBottom: '0.5rem' }}>Number of Golfers</label>
                        <input
                            type="number"
                            id="num_golfers"
                            name="num_golfers"
                            min="1"
                            max={num_golfers}
                            defaultValue={num_golfers}
                            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            background: '#2e7d32',
                            color: '#fff',
                            padding: '0.75rem 1.5rem',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    );
}
export default TeeTimeConfirmation;