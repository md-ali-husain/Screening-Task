import React, { useState } from "react";
import axios from "axios";

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const getGreeting = async () => {
        if (!name) {
            setMessage("Please enter a name.");
            return;
        }
        try {
            const response = await axios.get(`http://localhost:6000/api/greet?name=${name}`);
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error fetching greeting.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Greeting App</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={getGreeting}>Get Greeting</button>
            <p>{message}</p>
        </div>
    );
}

export default App;
