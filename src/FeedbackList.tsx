import React from 'react';
import Feedback from './Feedback';

interface FeedbackListProps {
    feedbacks: {
    name: string;
    jobTitle: string;
  }[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => (
  <div className="feedback-list">
    {feedbacks.map((feedback, index) => (
      <Feedback key={index} feedback={feedback} />
    ))}
  </div>
);

export default FeedbackList;
