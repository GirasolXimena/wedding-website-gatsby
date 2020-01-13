import React from 'react';

export const SheepAnimation: React.FC = () => {
  return (
    <div className="sheep">
      <div className="top">
        <div className="body" />
        <div className="head">
          <div className="eye one" />
          <div className="eye two" />
          <div className="ear one" />
          <div className="ear two" />
        </div>
      </div>
      <div className="legs">
        <div className="leg" />
        <div className="leg" />
        <div className="leg" />
        <div className="leg" />
      </div>
    </div>
  );
};

export default SheepAnimation;
