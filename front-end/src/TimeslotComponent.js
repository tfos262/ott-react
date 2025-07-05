import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function TimeSlotComponent({ time, num_golfers }) {
    const navigate = useNavigate();
    // returns no tee time component if a time is not provided
    if (!time) {
        return null;
    }

    return (
        <>
            <div className="card shadow mt-2" style={{ width: "95%" }}>
                <div className="card-body d-flex justify-content-between">
                    {/* Left aligned element (time) */}
                    <div className="d-flex flex-column">
                        <h5 className="card-title">{time}</h5>
                        <div className="d-flex">
                            {Array.from({ length: num_golfers }).map((_, i) => (
                                <img
                                    key={i}
                                    src="images/person-icon.svg"
                                    alt="Person Icon"
                                    className="me-1"
                                    width="16"
                                    height="16"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right aligned element (button) */}
                    <button
                        type="button"
                        className="btn btn-success ms-auto"
                        onClick={() => navigate('/TeeTimeConfirmation', { state: { time, num_golfers } })}
                    >
                        Reserve
                    </button>
                </div>
            </div>
        </>
    )
}

export default TimeSlotComponent