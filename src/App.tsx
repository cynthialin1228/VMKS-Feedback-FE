import React, { useState, useEffect } from 'react';
import './App.css';
import MemberList from './MemberList';

interface Member {
  name: string;
  jobTitle: string;
  introduction: string;
  photo: string;
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

  const [newMember, setNewMember] = useState<Member>({
    name: '',
    jobTitle: '',
    introduction: '',
    photo: '',
  });
  const [previewMember, setPreviewMember] = useState<Member | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNewMember({ ...newMember, [name]: value });
  }
  const handlePreview = (event: React.FormEvent) => {
    event.preventDefault();
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
      // setMembers([...members, newMember]);
      setNewMember({
        name: '',
        jobTitle: '',
        introduction: '',
        photo: '',
      });
      setPreviewMember(null);
  }

  return (
    <div className="App">
      <h1>Project Members</h1>
      <div className="member-list">
        <MemberList members={members} />
      </div>
      <h1>User Feedback</h1>
      <div className="form-container">
        <form>
          <h2>I want to post!</h2>
          <br></br>
          <div className="form-group">
            <label>To:</label>
            <input
              type="text"
              name="name"
              value={newMember.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>For:</label>
            <input
              type="text"
              name="jobTitle"
              value={newMember.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button type="button" onClick={handlePreview}>
              Preview
            </button>
            <button type="submit">Add New Member</button>
          </div>
        </form>
      </div>
      {previewMember && (
        <div className="preview-container">
          <h2>Preview</h2>
          <MemberList members={[previewMember]} />
        </div>
      )}
    </div>
  );
}

export default App;