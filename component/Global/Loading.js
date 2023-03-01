import React from 'react';

const Loading = ({ children, spinning }) => {
  //   const { spinning } = props;
  return (
    <>
      {spinning && (
        <div>
          <div className="container-loading center">
            <svg className="spinner" width="240" height="240" viewBox="0 0 240 240">
              <circle
                className="ani circle1"
                cx="120"
                cy="120"
                r="105"
                fill="none"
                stroke="#000"
                strokeWidth="20"
                strokeLinecap="round"
                strokeDasharray="0 660"
                strokeDashoffset="-330"
              />
              <circle
                className="ani circle2"
                cx="120"
                cy="120"
                r="35"
                fill="none"
                stroke="#000"
                strokeWidth="20"
                strokeDasharray="0 220"
                strokeDashoffset="-110"
                strokeLinecap="round"
              />
              <circle
                className="ani circle3"
                cx="85"
                cy="120"
                r="70"
                fill="none"
                stroke="#000"
                strokeWidth="20"
                strokeDasharray="0 440"
                strokeLinecap="round"
              />
              <circle
                className="ani circle4"
                cx="155"
                cy="120"
                r="70"
                fill="none"
                stroke="#000"
                strokeWidth="20"
                strokeDasharray="0 440"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default Loading;
