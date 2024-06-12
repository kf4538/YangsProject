import React from 'react';

const ImageOption = ({ src, alt, onClick, isSelected }) => {
  const handleClick = () => {
    onClick(src);
  };

  return (
    <div 
      onClick={handleClick} 
      style={{ 
        border: isSelected ? '2px solid blue' : '2px solid transparent',
        cursor: 'pointer',
        padding: '10px'
      }}
    >
      <img src={src} alt={alt} style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default ImageOption;