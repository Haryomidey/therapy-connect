import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientInput from './components/ClientInput';
import TherapistView from './components/TherapistView';
import ResultsComparison from './components/ResultsComparison';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/client" element={<ClientInput clientId="clientId" therapistId="therapistId" />} />
        <Route path="/therapist" element={<TherapistView sessionId="sessionId" />} />
        <Route path="/results" element={<ResultsComparison clientAnswers={[0, 1]} therapistAnswers={[1, 0]} />} />
      </Routes>
    </Router>
  );
};

export default App;
