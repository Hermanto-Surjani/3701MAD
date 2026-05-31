import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [profileReply, setProfileReply] = useState('');
  const [formReply, setFormReply] = useState('');
  const [authReply, setAuthReply] = useState('');
  const [sessionReply, setSessionReply] = useState('');

  // GET example
  useEffect(() => {
    fetch('http://localhost:3001/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('GET error:', err));
  }, []);

  // POST JSON profile
  const sendProfile = () => {
    fetch('http://localhost:3001/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Hermanto' }),
    })
      .then((res) => res.json())
      .then((data) => setReply(data.reply))
      .catch((err) => console.error('POST error:', err));
  };

  // POST JSON to /profile
  const sendJsonProfile = () => {
    fetch('http://localhost:3001/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John', age: 30 }),
    })
      .then((res) => res.text())
      .then((result) => setProfileReply(result))
      .catch((err) => console.error('Profile error:', err));
  };

  // POST Form Data
  const sendFormData = () => {
    fetch('http://localhost:3001/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ username: 'john_doe' }),
    })
      .then((res) => res.text())
      .then((result) => setFormReply(result))
      .catch((err) => console.error('Form error:', err));
  };

  // GET with Authorization Header
  const sendAuthRequest = () => {
    fetch('http://localhost:3001/api', {
      headers: { Authorization: 'Bearer your_token_here' },
    })
      .then((res) => res.text())
      .then((result) => setAuthReply(result))
      .catch((err) => console.error('Auth error:', err));
  };

  // GET with Cookie (Dashboard)
  const sendCookieRequest = () => {
    document.cookie = 'session_id=abc123';
    fetch('http://localhost:3001/dashboard', {
      credentials: 'include',
    })
      .then((res) => res.text())
      .then((result) => setSessionReply(result))
      .catch((err) => console.error('Cookie error:', err));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>React + Express Demo</h1>

      <h2>1. GET Request</h2>
      <p>{message || 'Loading...'}</p>

      <h2>2. POST JSON (/api/profile)</h2>
      <button onClick={sendProfile}>Send Profile</button>
      <p>{reply}</p>

      <h2>3. POST JSON (/profile)</h2>
      <button onClick={sendJsonProfile}>Send JSON Profile</button>
      <p>{profileReply}</p>

      <h2>4. POST Form Data (/form)</h2>
      <button onClick={sendFormData}>Send Form Data</button>
      <p>{formReply}</p>

      <h2>5. GET with Auth Header (/api)</h2>
      <button onClick={sendAuthRequest}>Send Auth Request</button>
      <p>{authReply}</p>

      <h2>6. GET with Cookie (/dashboard)</h2>
      <button onClick={sendCookieRequest}>Send Cookie Request</button>
      <p>{sessionReply}</p>
    </div>
  );
}

export default App;
