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
  const [members, setMembers] = useState<Member[]>([]);
  const [newMember, setNewMember] = useState<Member>({
    name: '',
    jobTitle: '',
    introduction: '',
    photo: '',
  });

  useEffect(() => {
    fetch('/api/members')
      .then(response => response.json())
      .then((data: Member[]) => setMembers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewMember({ ...newMember, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch('/api/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMember),
    })
      .then(response => response.json())
      .then((data: Member) => {
        setMembers([...members, data]);
        setNewMember({
          name: '',
          jobTitle: '',
          introduction: '',
          photo: '',
        });
      })
      .catch(error => console.error('Error adding member:', error));
  };

  return (
    <div className="App">
      <h1>Project Members</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newMember.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              value={newMember.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Introduction:</label>
            <textarea
              name="introduction"
              value={newMember.introduction}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Add New Member</button>
          </div>
        </form>
      </div>
      <MemberList members={members} />
    </div>
  );
}

export default App;