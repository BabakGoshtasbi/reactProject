import React, { useState } from 'react';
import Thumbnail from './Thumbnail';
import templatesData from '../data/templates.json';

const Filmstrip = ({ onSelectThumbnail }) => {
  const [start, setStart] = useState(0);
  const thumbnailsPerPage = 4;

  const handlePrevious = () => {
    setStart(start - thumbnailsPerPage);
  };

  const handleNext = () => {
    setStart(start + thumbnailsPerPage);
  };

  const renderThumbnails = () => {
    const end = Math.min(start + thumbnailsPerPage, templatesData.length);
    return templatesData.slice(start, end).map((template, index) => (
      <Thumbnail
        key={template.id}
        thumbnail={template.thumbnail}
        isSelected={index === 0} // Assuming the first thumbnail is initially selected
        onClick={() => onSelectThumbnail(template)}
      />
    ));
  };

  return (
    <div className="filmstrip">
      <div className="thumbnails">{renderThumbnails()}</div>
      <div className="controls">
        <button onClick={handlePrevious} disabled={start === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={start + thumbnailsPerPage >= templatesData.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Filmstrip;
