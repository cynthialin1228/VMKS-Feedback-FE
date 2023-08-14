import React from 'react';

interface MemberProps {
  member: {
    name: string;
    jobTitle: string;
    introduction: string;
    photo: string;
  };
}

const Member: React.FC<MemberProps> = ({ member }) => (
  <div className="member">
    <div className="photo-container">
      <img className="circular-photo" src={member.photo} alt="photo" />
    </div>
    <h2 style={{ whiteSpace: 'pre' }}>{member.name}</h2>
    <h4 style={{ whiteSpace: 'pre' }}>{member.jobTitle}</h4>
    <p style={{ whiteSpace: 'pre' }}>{member.introduction}</p>
  </div>
);

export default Member;