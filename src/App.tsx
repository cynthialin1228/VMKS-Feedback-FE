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

  const [newMember, setNewMember] = useState<Member>({
    name: '',
    jobTitle: '',
    introduction: '',
    photo: '',
  });
  const [previewMember, setPreviewMember] = useState<Member | null>(null);
  const [showAutocomplete, setShowAutocomplete] = useState(false); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNewMember({ ...newMember, [name]: value });
    setShowAutocomplete(true);
  }
  const handleMemberSelect = (selectedMember: Member) => {
    setNewMember({ ...newMember, name: selectedMember.name });
    setShowAutocomplete(false);
  }
  const handlePreview = (event: React.FormEvent) => {
    event.preventDefault();
    //something#########
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //something##########
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
              onFocus={() => setShowAutocomplete(true)} 
              placeholder="Search and select a member"
            />
            {showAutocomplete && (
            <ul className="autocomplete-list">
              {members
                .filter(member => member.name.toLowerCase().includes(newMember.name.toLowerCase()))
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