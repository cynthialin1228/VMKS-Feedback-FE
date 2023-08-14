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
    <img src={member.photo} alt={member.name} />
    <h2>{member.name}</h2>
    <p>{member.jobTitle}</p>
    <p>{member.introduction}</p>
  </div>
);

export default Member;