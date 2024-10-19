import React, { useEffect, useState } from 'react';
import axios from '../config/axiosConfig';

const TherapistView = ({ sessionId }) => {
    const [sessionData, setSessionData] = useState(null);

    useEffect(() => {
        const fetchSessionData = async () => {
            const response = await axios.get(`/session/${sessionId}`);
            setSessionData(response.data);
        };
        fetchSessionData();
    }, [sessionId]);

    return (
        <div>
            <h2>Therapist View</h2>
            {sessionData && (
                <div>
                    <p>Client Well-Being: {sessionData.clientWellBeing}</p>
                </div>
            )}
        </div>
    );
};

export default TherapistView;
