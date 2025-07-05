import react from "react";

function Home() {

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'flex-start', // Changed from 'center' to 'flex-start'
                justifyContent: 'center',
                background: `url(${require('./golf_login.jpg')}) center/cover no-repeat`
            }}
        >
            <div
                className="container mt-5"
                style={{
                    background: "rgba(255,255,255,0.85)",
                    borderRadius: "8px",
                    padding: "2rem",
                    marginTop: "3rem" // Optional: adjust this value to control how high the box appears
                }}
            >
                <h1>Welcome to Stiles Golf Course</h1>
                <p className="lead">Championship Golf, close to home</p>
                <p>
                    We look forward to your next round of golf, or event outing! Explore our course information, book tee times, and enjoy your day on the greens.
                </p>
            </div>
        </div>
    );
}
export default Home;