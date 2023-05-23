import React, { useState } from 'react';
import Filmstrip from './components/Filmstrip';
import ImageDetails from './components/ImageDetails';

const AppOld = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSelectThumbnail = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="appold">
      <h1>Image Viewer</h1>
      <Filmstrip onSelectThumbnail={handleSelectThumbnail} />
      {selectedTemplate && <ImageDetails template={selectedTemplate} />}
    </div>
  );
};

export default AppOld;
