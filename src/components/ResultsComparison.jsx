import React from 'react';

const ResultsComparison = ({ clientAnswers, therapistAnswers }) => {
    return (
        <div>
            <h2>Results Comparison</h2>
            <h3>Client Answers: {clientAnswers.join(', ')}</h3>
            <h3>Therapist Answers: {therapistAnswers.join(', ')}</h3>
        </div>
    );
};

export default ResultsComparison;
