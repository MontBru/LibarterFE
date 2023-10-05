import React, { useState } from 'react';
import Tag from './Tag'; // Import the Tag component

const TagList = ({tags, setTags, removable}) => {
  

  const handleDeleteTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <div>
      {
        tags !== null?
        <div className="mt-2">
        <ul>
          <li>
          {tags.map((tag, index) => (
          <Tag
            key={index}
            text={tag}
            removable={removable}
            onDelete={() => handleDeleteTag(index)}
          />
          ))}
          </li>
        </ul>
      </div>:
      null
      }
      
    </div>
    
  );
};

export default TagList;