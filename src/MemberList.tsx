import React from 'react';
import Member from './Member';

interface MemberListProps {
  members: {
    name: string;
    jobTitle: string;
    introduction: string;
    photo: string;
  }[];
}

const MemberList: React.FC<MemberListProps> = ({ members }) => (
  <div className="member-list">
    {members.map((member, index) => (
      <Member key={index} member={member} />
    ))}
  </div>
);

export default MemberList;
