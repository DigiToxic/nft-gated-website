import React from 'react';

const BlurredText = ({ text }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <span key={index} className="blurred-letter">
          {char}
        </span>
      ))}
    </>
  );
}

export default BlurredText