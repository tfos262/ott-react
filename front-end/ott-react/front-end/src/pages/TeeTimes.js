// src/pages/TeeTimes.js
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import CalendarComponent from '../components/CalendarComponent';
import TimeslotComponent from '../components/TimeslotComponent';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { format24to12 } from '../util/FormatTime';



function TeeTimes() {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [teeTimes, setTeeTimes] = useState([]);

    useEffect(() => {
        const fetchAvailableTeeTimes = async () => {
            try {
                const year = selectedDate.getFullYear();
                const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                const day = String(selectedDate.getDate()).padStart(2, '0');
                const formattedDate = `${year}-${month}-${day}`;

                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/available-teetimes`, {
                    params: { date: formattedDate },
                });

                let times = response.data;

                // If selected date is today, filter out past tee times
                const now = new Date();
                const isToday =
                    now.getFullYear() === selectedDate.getFullYear() &&
                    now.getMonth() === selectedDate.getMonth() &&
                    now.getDate() === selectedDate.getDate();

                if (isToday) {
                    const currentTime = now.getHours() * 60 + now.getMinutes();

                    times = times.filter((tt) => {
                        const [hh, mm] = tt.time.split(':').map(Number);
                        const teeTimeMinutes = hh * 60 + mm;
                        return teeTimeMinutes >= currentTime;
                    });
                }

                setTeeTimes(times);
            } catch (err) {
                console.error('Failed to fetch available tee times:', err);
            }
        };

        fetchAvailableTeeTimes();
    }, [selectedDate]);

    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundImage: `url(${require('../images/golf_login.jpg')})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                padding: 0,
                margin: 0,
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'row', gap: '3rem', position: 'relative', marginTop: '3rem' }}>
                <CalendarComponent onDateChange={setSelectedDate} />
                <div style={{ marginTop: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    {teeTimes.filter((tt) => tt.available_spots > 0).length > 0 ? (
                        teeTimes
                            .filter((tt) => tt.available_spots > 0)
                            .map((tt, idx) => {
                                const numGolfers = tt.available_spots;
                                const amount = numGolfers * 50;

                                return (
                                    <div
                                        key={idx}
                                        style={{
                                            width: 'clamp(500px, 40vw, 900px)',
                                            transition: 'width 0.3s',
                                        }}
                                    >
                                        <TimeslotComponent
                                            time={format24to12(tt.time)}
                                            num_golfers={
                                                <span>
                                                    {Array.from({ length: numGolfers }).map((_, i) => (
                                                        <img
                                                            key={i}
                                                            src={process.env.PUBLIC_URL + '/images/person-icon.svg'}
                                                            alt="person"
                                                            style={{
                                                                width: 16,
                                                                height: 16,
                                                                marginRight: 2,
                                                                verticalAlign: 'middle',
                                                            }}
                                                        />
                                                    ))}
                                                </span>
                                            }
                                            onClick={() => {
                                                const selectedTeeTime = {
                                                    date: selectedDate,
                                                    time: tt.time,
                                                    num_golfers: numGolfers,
                                                    amount,
                                                };

                                                setUser({ ...user, tee_time: selectedTeeTime });
                                                navigate('/TeeTimeConfirmation', { state: selectedTeeTime });
                                            }}
                                        />
                                    </div>
                                );
                            })
                    ) : (
                        <div
                            style={{
                                width: 'clamp(500px, 40vw, 900px)',
                                background: '#f9f9f9',
                                padding: '1rem',
                                borderRadius: '6px',
                                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                fontSize: '1.1rem',
                            }}
                        >
                            No more tee times available for this date.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TeeTimes;
