import React, { useState } from 'react';
import axios from '../config/axiosConfig';

const ClientInput = ({ clientId, therapistId }) => {
    const [wellBeing, setWellBeing] = useState(0);
    
    const handleInput = async () => {
        const response = await axios.post('/session', {
            clientId,
            therapistId,
            clientWellBeing: wellBeing,
            sessionQuestions: {
                client: [],
                therapist: [],
            },
        });
        console.log('Session created:', response.data);
    };

    return (
        <div>
            <h2>Client Well-Being Input</h2>
            <input
                type="number"
                value={wellBeing}
                onChange={(e) => setWellBeing(e.target.value)}
                min="0"
                max="10"
            />
            <button onClick={handleInput}>Submit</button>
        </div>
    );
};

export default ClientInput;
