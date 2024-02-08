import React from 'react';
import './style.css';

const Skeleton = () => {
  return (
    <><div className="skeleton-container">
          <div className="skeleton-content"></div>
      </div><div className="skeleton-container-middle">
              <div className="skeleton-content"></div>
          </div><div className="skeleton-container">
              <div className="skeleton-content"></div>
          </div><div className="skeleton-container-middle">
              <div className="skeleton-content"></div>
          </div></>
  );
};

export default Skeleton;
