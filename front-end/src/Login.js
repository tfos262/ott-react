import React from 'react';
import { useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email, 'Password:', password);
    };

    const [loginClicked, setLoginClicked] = React.useState(false);

    useEffect(() => {
        if (loginClicked) {
            // Perform your action here
            console.log('Login button was clicked!');
            fetch('/api/check-customer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            .then(res => res.json())
            .then(data => {
                if (data.exists && data.email === email && data.password === password) {
                    console.log('Customer exists and credentials match!');
                    // dashboard or home page
                } else {
                    console.log('Invalid email or password.');
                    // show error message
                }
            })
            .catch(err => {
                console.error('Error checking customer:', err);
            });
            // Reset if you want to allow future clicks to trigger again
            setLoginClicked(false);
        }
    }, [loginClicked]);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `url(${require('./golf_login.jpg')}) center/cover no-repeat`
        }}>
            <form
                onSubmit={e => {
                    handleSubmit(e);
                    setLoginClicked(true);
                }}
                style={{
                    background: 'rgba(255,255,255,0.95)',
                    padding: '2rem 2.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                    minWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                    color: '#4f46e5',
                    letterSpacing: '1px'
                }}>Login</h2>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #d1d5db',
                            fontSize: '1rem'
                        }}
                        placeholder="Enter your email"
                    />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: '6px',
                            border: '1px solid #d1d5db',
                            fontSize: '1rem'
                        }}
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: '#4f46e5',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                >
                    Login
                </button>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginTop: '1.5rem'
                }}>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                        Don't have an account? <a href='/signup'>Sign up</a> for free!
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;