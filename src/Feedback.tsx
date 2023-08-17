import React from 'react';

interface FeedbackProps {
  feedback: {
    name: string;
    jobTitle: string;
  };
}

const Feedback: React.FC<FeedbackProps> = ({feedback }) => (
  <div className="feedback">
    <h2 style={{ whiteSpace: 'pre' }}>{feedback.name}</h2>
    <h4 style={{ whiteSpace: 'pre' }}>{feedback.jobTitle}</h4>
  </div>
);

export default Feedback;