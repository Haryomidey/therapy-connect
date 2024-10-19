import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ClientInput from '../components/ClientInput';
import TherapistView from '../components/TherapistView';
import ResultsComparison from '../components/ResultsComparison';

const router = createHashRouter([
    {
        path: "/client",
        element: <ClientInput clientId="clientId" therapistId="therapistId" />,
    },
    {
        path: "/therapist",
        element: <TherapistView sessionId="sessionId" />,
    },
    {
        path: "/results",
        element: <ResultsComparison clientAnswers={[0, 1]} therapistAnswers={[1, 0]} />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
