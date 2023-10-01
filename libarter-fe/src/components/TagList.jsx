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
      
      <div className="mt-2">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            text={tag}
            removable={removable}
            onDelete={() => handleDeleteTag(index)}
          />
        ))}
      </div>
    </div>
    
  );
};

export default TagList;