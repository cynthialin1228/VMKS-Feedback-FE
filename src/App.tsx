import React, { useState, useEffect } from 'react';
import './App.css';
import MemberList from './MemberList';
import FeedbackList from './FeedbackList';

interface Member {
  name: string;
  jobTitle: string;
  introduction: string;
  photo: string;
}
interface Feedback {
  name: string;
  jobTitle: string;
}

function App() {
  const [members] = useState<Member[]>([
    {
      name: '林新晨',
      jobTitle: '進階開發組',
      introduction: 'this is the page!',
      photo: '',
    },
    {
      name: 'kkk',
      jobTitle: '前端組',
      introduction: 'Creating nice user experiences.',
      photo: '',
    },
    {
      name: 'lalala',
      jobTitle: '前端組',
      introduction: 'Creating nice user experiences.',
      photo: '',
    },
    {
      name: 'ccj',
      jobTitle: '前端組',
      introduction: 'Creating nice user experiences.',
      photo: '',
    },
    {
      name: 'kjh',
      jobTitle: '前端組',
      introduction: 'Creating nice user experiences.',
      photo: '',
    },
    {
      name: 'kkk',
      jobTitle: '前端組',
      introduction: 'Creating nice user experiences.',
      photo: '',
    },
    {
      name: 'kkk',
      jobTitle: '前端組',
      introduction: 'Creating nice user experiences.',
      photo: '',
    },
    {
      name: 'kkk',
      jobTitle: '前端組',
      introduction: 'Creating nice user experiences.',
      photo: '',
    },
  ]);
  const [feedbacks] = useState<Feedback[]>([]);
  const [newFeedback, setNewFeedback] = useState<Feedback>({
    name: '',
    jobTitle: '',
  });
  const [showAutocomplete, setShowAutocomplete] = useState(false); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNewFeedback({ ...newFeedback, [name]: value });
    setShowAutocomplete(true);
  }
  const handleMemberSelect = (selectedMember: Member) => {
    setNewFeedback({ ...newFeedback, name: selectedMember.name });
    setShowAutocomplete(false);
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    //backend part

    setNewFeedback({
        name: '',
        jobTitle: '',
    });
    <div className="form-container">
          <h2>Adding</h2>
          <FeedbackList feedbacks={[newFeedback]} />
    </div>
  }

  return (
    <div className="App">
      <h1>Project Members</h1>
      <div className="member-list">
        <MemberList members={members} />
      </div>
      <br></br>
      <h1>User Feedback</h1>
      <br></br>
      <div className="feedback-div">
      <div className="form-container">
        <form>
          <h2>I want to post!</h2>
          <br></br>
          <div className="form-group">
            <label>To:</label>
            <input
              type="text"
              name="name"
              value={newFeedback.name}
              onChange={handleInputChange}
              onFocus={() => setShowAutocomplete(true)} 
              placeholder="Search and select a member"
            />
            {showAutocomplete && (
            <ul className="autocomplete-list">
              {members
                .filter(member => member.name.toLowerCase().includes(newFeedback.name.toLowerCase()))
                .map((member, index) => (
                  <ul key={index} onClick={() => handleMemberSelect(member)}>
                    {member.name}
                  </ul>
                ))}
            </ul>
            )}
          </div>
          <div className="form-group">
            <label>For:</label>
            <input
              type="text"
              name="jobTitle"
              value={newFeedback.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" onClick={handleSubmit}>Add New</button>
          </div>
        </form>
        
      </div>
      {newFeedback && (
        <div className="form-container">
          <h2>Adding</h2>
          <FeedbackList feedbacks={[newFeedback]} />
        </div>
      )}
      </div>
    </div>
  );
}

export default App;