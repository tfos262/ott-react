import axios from 'axios';

export async function loginAndGetToken(email, password) {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
      email,
      password,
    });
    return response.data.token; 
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
}