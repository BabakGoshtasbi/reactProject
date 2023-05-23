import React from 'react';

const ImageDetails = ({ template }) => {
  return (
    <div className="image-details">
      <div>ID: {template.id}</div>
      <div>Cost: {template.cost}</div>
      <div>Description: {template.description}</div>
      <div>Thumbnail File Name: {template.thumbnail}</div>
      <div>Image File Name: {template.image}</div>
    </div>
  );
};

export default ImageDetails;
