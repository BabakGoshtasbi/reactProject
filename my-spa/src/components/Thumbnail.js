import React from 'react';

const Thumbnail = ({ thumbnail, isSelected, onClick }) => {
  return (
    <img
      className={`thumbnail ${isSelected ? 'selected' : ''}`}
      src={thumbnail}
      alt="Thumbnail"
      onClick={onClick}
    />
  );
};

export default Thumbnail;
